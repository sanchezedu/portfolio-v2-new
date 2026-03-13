import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Loader2Icon } from "lucide-react";

import CustomInput from "@/components/utility/custom-input";
import CustomTextarea from "@/components/utility/custom-textarea";
import { type FormiKInputFieldProps } from "@/utility/types";

export const mailValidationSchema = Yup.object({
  email: Yup.string().email("Email inválido").required("Email requerido"),
  name: Yup.string().required("Nombre requerido"),
  subject: Yup.string().required("Asunto requerido"),
  message: Yup.string().required("Mensaje requerido"),
});

export type ContactFormValues = Yup.InferType<typeof mailValidationSchema>;

export type FormFields = {
  name: keyof ContactFormValues;
  label: string;
  type: "text";
  fieldType: "text" | "textarea";
  placeholder: string;
};

const FormFieldsData: FormFields[] = [
  {
    name: "email",
    label: "Correo",
    type: "text",
    fieldType: "text",
    placeholder: "Correo",
  },
  {
    name: "name",
    label: "Nombre",
    type: "text",
    fieldType: "text",
    placeholder: "Nombre",
  },
  {
    name: "subject",
    label: "Asunto",
    type: "text",
    fieldType: "text",
    placeholder: "Asunto",
  },
  {
    name: "message",
    label: "Mensaje",
    type: "text",
    fieldType: "textarea",
    placeholder: "Mensaje",
  },
];

const initialFormValues: ContactFormValues = {
  email: "",
  name: "",
  message: "",
  subject: "",
};

export interface ContactFormProps {
  isSubmitting: boolean;
  // eslint-disable-next-line
  handleSubmit: (values: ContactFormValues) => Promise<void>;
}

export default function ContactForm({
  isSubmitting,
  handleSubmit,
}: ContactFormProps) {
  return (
    <>
      <Formik
        initialValues={initialFormValues}
        validationSchema={mailValidationSchema}
        onSubmit={handleSubmit}
        validateOnChange
      >
        <Form className="mt-6 flex flex-col gap-3">
          {FormFieldsData.map((form) => (
            <div key={form.name} className="flex flex-col gap-1">
              <div>
                <label
                  htmlFor={form.name}
                  className="inline font-medium text-background"
                >
                  {form.label}
                </label>
              </div>
              <div className="relative">
                <Field name={form.name}>
                  {({ field, meta }: FormiKInputFieldProps<string>) =>
                    form.fieldType === "text" ? (
                      <>
                        <CustomInput
                          id={form.name}
                          {...field}
                          type={form.type}
                          placeholder={form.placeholder}
                          autoComplete="off"
                        />
                        {Boolean(meta.touched && meta.error) && (
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-red-400 md:text-sm">
                            {meta.error}
                          </span>
                        )}
                      </>
                    ) : (
                      <>
                        <CustomTextarea
                          id={form.name}
                          {...field}
                          placeholder={form.placeholder}
                        />
                        {Boolean(meta.touched && meta.error) && (
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-red-400 md:text-sm">
                            {meta.error}
                          </span>
                        )}
                      </>
                    )
                  }
                </Field>
              </div>
            </div>
          ))}
          <button
            aria-label="enviar correo"
            type="submit"
            className="mt-4 w-full rounded-full bg-background px-4 py-3 text-center text-lg font-semibold text-accent transition-colors duration-150 hover:bg-background/90 disabled:cursor-not-allowed disabled:bg-background/80"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="inline-flex items-center space-x-2">
                <Loader2Icon className="animate-spin" size={16} />
                <span>Enviando</span>
              </div>
            ) : (
              <span>Enviar</span>
            )}
          </button>
        </Form>
      </Formik>
    </>
  );
}
