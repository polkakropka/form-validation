import React from 'react'
import {
    Box,
    Button,
    FormGroup,
    InputLabel,
    MenuItem,
    TextField,
} from '@material-ui/core'
import {Formik, Form, Field, ErrorMessage} from "formik";
import InputField from "../InputField/InputField";
import { number, object, string} from "yup";

const initialValues: Values = {
    firstName: '',
    email: '',
    topic: 'Wähle das Thema',
    text: '',
    softwareVersion: 0
};

interface Values {
    firstName: string;
    email: string;
    topic: string;
    text: string;
    softwareVersion: number
}
interface Props {
    onSubmit: (values: Values) => void
}

const MyForm: React.FC<Props> = ({onSubmit}) => {

    return (
            <Formik
                validationSchema={
                    object({
                        firstName: string().required('Trage dein Name ein').min(2).max(100),
                        topic: number().required('Wähle das Thema').min(0).max(3),
                        email: string().required('Trage deine E-Mail ein').email(),
                        text: string().required('Besschreibe dein Problem'),
                        softwareVersion: number().required('Trage Software Nummer ein').max(5),
                    })
                }
                initialValues={initialValues}
                onSubmit={ (values) => {
                onSubmit(values)
                 return new Promise(res => {
                     setTimeout(() => {
                            console.log(values);
                            console.log('---------');
                            res();
                        }, 5000);
                    })
            }}>
                {({values})=>
                  <Form>
                      <Box marginBottom={2}>
                          <FormGroup>
                              <InputLabel id="demo-simple-select-label">Name</InputLabel>
                              <Field name="firstName" placeholder="firstName" component={InputField}/>
                              <ErrorMessage name="firstName" />
                          </FormGroup>
                      </Box>
                       <Box marginBottom={2}>
                           <FormGroup>
                               <Field
                                   name="topic"
                                   fullWidth
                                   id="outlined-basic"
                                   variant="outlined"
                                   label="Topic"
                                   select
                                   as={TextField}
                               >
                                   <MenuItem value={1}>Software Version</MenuItem>
                                   <MenuItem value={2}>Allgemeine Anfrage</MenuItem>
                                   <MenuItem value={3}>Rückruf</MenuItem>
                               </Field>
                               <ErrorMessage name="topic" />
                           </FormGroup>
                       </Box>
                      <Box marginBottom={2}>
                          <FormGroup>
                              <InputLabel id="demo-simple-select-label">Software Version</InputLabel>
                              <Field name="softwareVersion" placeholder="Software Version" type='number' component={InputField}/>
                              <ErrorMessage name="softwareVersion" />
                          </FormGroup>
                      </Box>
                      <Box marginBottom={2}>
                          <FormGroup>
                              <Field name="email" placeholder="email" label="E-Mail" component={InputField}/>
                              <ErrorMessage name="email" />
                          </FormGroup>
                      </Box>
                      <Box marginBottom={2}>
                          <FormGroup>
                              <InputLabel id="demo-simple-select-label">Message</InputLabel>
                              <Field
                                  name="text"
                                  rowsMin={3}
                                  rowMax={10}
                                  multiline
                                  as={TextField}
                              />
                              <ErrorMessage name="text" />
                          </FormGroup>
                      </Box>
                      <Button type="submit"
                              variant="contained"
                              color="primary"> Submit </Button>
                    <pre>
                        {JSON.stringify(values, null, 4)}
                    </pre>
                  </Form>
                }
            </Formik>
    )

}

export default MyForm