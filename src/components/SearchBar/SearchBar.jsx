import { Formik, Form, Field } from "formik"
import toast, { Toaster } from 'react-hot-toast';

import style from "./SearchBar.module.css"



export default function SearchBar({ onSearch }) {
  return (
    <header className={style.header}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          if (values.query.trim() === "") {
            toast.error("Please  enter data to search.", {
  autoClose: 1500 
});
            return;
          }
          onSearch(values.query);
          actions.resetForm();
        }}
      >
        {({ values }) => (
          <Form className={style.form}>
            <Field className={style.fieldInput}
              type="text"
              name="query"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <button className={style.btnSearch} type="submit">Search</button>
            {values.query.trim() === "" && <Toaster />} 
          </Form>
        )}
      </Formik>
    </header>
  );
}


