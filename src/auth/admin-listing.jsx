import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Admin_Card } from "../component/component";
import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Field, Formik } from "formik";
import * as yup from "yup";
import getAllListing from "../service/listing/getAllListing";
import postAddListing from "../service/listing/postAddListing";
import { toast } from "react-hot-toast";

const Listing = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [listings, setListings] = useState([]);
  const [listingTouched, setListingTouched] = useState(false);
  async function updateListings() {
    try {
      const res = await getAllListing();
      if (!res || res.length === 0) {
        throw new Error("No Listing");
      }
      setListings(res);
    } catch (error) {
      toast.error("Could Not Load Listings");
    }
  }
  useEffect(() => {
    updateListings();
  }, [listingTouched]);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleFormSubmit = (values) => {
    const formData = new FormData();
    for (let i in values) {
      formData.append(i, values[i]);
    }
    async function handle() {
      try {
        const res = await postAddListing({ data: formData });

        if (res) {
          setListingTouched(!listingTouched);
          toast.success(res);
        }
      } catch (error) {
        toast.error("Something Went Wrong");
      }
    }
    handle();

    closeModal();
  };

  const initialValues = {
    name: "",
    price_per_hour: "",
    price_per_day: "",
    contact: "",
    address: "",
    quantity: "",
    details: "",
    listingImage: "",
    type: 1,
  };
  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const validateYupSchema = yup.object().shape({
    name: yup.string().required("required"),
    price_per_hour: yup
      .number()
      .typeError("Must be a number")
      .required("required"),
    price_per_day: yup
      .number()
      .typeError("Must be a number")
      .required("required"),
    contact: yup
      .string()
      .matches(phoneRegExp, "Invalid Phone Number")
      .required("required"),
    address: yup.string().required("required"),
    quantity: yup.number().typeError("Must be a number").required("required"),
    details: yup.string().min(20).required("required"),
    listingImage: yup.mixed().required("You need to provide a file"),
  });
  return (
    <div className="md:absolute   m-0 mx-auto py-20 lg:right-0 lg:py-10 w-[95%] m-auto lg:w-[75%] ">
      <div className="w-[80%]  m-0 mx-auto">
        <div className="w-full border-b-[2px] pb-5 grid grid-cols-2 items-center">
          <div className=" w-full">
            {" "}
            <h1 className="text-[1.5rem] font-medium text-neutral-700">
              Listing
            </h1>
            <p className="text-[.8rem] text-neutral-600">
              Managing The listing
            </p>
          </div>

          <div className="w-full   ">
            <button
              type="button"
              onClick={openModal}
              className="btn float-right bg-blue-600 text-[.9rem] text-white rounded py-2 px-5"
            >
              Add New Listing
            </button>
          </div>

          <Transition appear show={isOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-10"
              onClose={() => {
                return null;
              }}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-[50%] min-w-[400px] transform overflow-hidden rounded-2xl bg-white p-6   shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-[1.2rem] font-medium leading-6 text-gray-900"
                      >
                        <span className="border-b pb-2  px-5 border-blue-600 rounded">
                          Add A New Listing
                        </span>
                      </Dialog.Title>
                      <Formik
                        onSubmit={handleFormSubmit}
                        initialValues={initialValues}
                        validationSchema={validateYupSchema}
                      >
                        {({
                          handleBlur,
                          handleSubmit,
                          handleChange,
                          touched,
                          errors,
                          values,

                          setFieldValue,
                        }) => {
                          return (
                            <form onSubmit={handleSubmit}>
                              <Box
                                autoComplete="off"
                                className="w-full grid grid-cols-1 gap-5 py-10 lg:grid-cols-2"
                              >
                                <TextField
                                  fullWidth
                                  variant="outlined"
                                  type="text"
                                  label="Name"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.name}
                                  name="name"
                                  size="small"
                                  error={!!touched.name && !!errors.name}
                                  helperText={touched.name && errors.name}
                                ></TextField>

                                <TextField
                                  fullWidth
                                  variant="outlined"
                                  className=""
                                  type="text"
                                  size="small"
                                  label="price_per_hour"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.price_per_hour}
                                  name="price_per_hour"
                                  error={
                                    !!touched.price_per_hour &&
                                    !!errors.price_per_hour
                                  }
                                  helperText={
                                    touched.price_per_hour &&
                                    errors.price_per_hour
                                  }
                                ></TextField>

                                <TextField
                                  fullWidth
                                  variant="outlined"
                                  className=""
                                  type="text"
                                  size="small"
                                  label="price_per_day"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.price_per_day}
                                  name="price_per_day"
                                  error={
                                    !!touched.price_per_day &&
                                    !!errors.price_per_day
                                  }
                                  helperText={
                                    touched.price_per_day &&
                                    errors.price_per_day
                                  }
                                ></TextField>

                                <TextField
                                  fullWidth
                                  variant="outlined"
                                  className=""
                                  type="text"
                                  size="small"
                                  label="contact"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.contact}
                                  name="contact"
                                  error={!!touched.contact && !!errors.contact}
                                  helperText={touched.contact && errors.contact}
                                ></TextField>
                                <TextField
                                  fullWidth
                                  variant="outlined"
                                  className=""
                                  type="text"
                                  size="small"
                                  label="address"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.address}
                                  name="address"
                                  error={!!touched.address && !!errors.address}
                                  helperText={touched.address && errors.address}
                                ></TextField>
                                <TextField
                                  fullWidth
                                  variant="outlined"
                                  className=""
                                  type="text"
                                  size="small"
                                  label="Quantity"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.quantity}
                                  name="quantity"
                                  error={
                                    !!touched.quantity && !!errors.quantity
                                  }
                                  helperText={
                                    touched.quantity && errors.quantity
                                  }
                                ></TextField>

                                <TextField
                                  fullWidth
                                  variant="outlined"
                                  type="text"
                                  size="small"
                                  label="details"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.details}
                                  name="details"
                                  error={!!touched.details && !!errors.details}
                                  helperText={touched.details && errors.details}
                                ></TextField>

                                <Field
                                  name="fieldName"
                                  value={values.type}
                                  error={!!touched.details && !!errors.details}
                                  helperText={touched.details && errors.details}
                                >
                                  {({ form }) => (
                                    <Fragment>
                                      <RadioGroup
                                        defaultValue={1}
                                        onChange={(e) => {
                                          setFieldValue("type", e.target.value);
                                        }}
                                      >
                                        <FormControlLabel
                                          value="1"
                                          control={<Radio />}
                                          label="For Land"
                                        />
                                        <FormControlLabel
                                          value="2"
                                          control={<Radio />}
                                          label="For Water"
                                        />
                                      </RadioGroup>
                                    </Fragment>
                                  )}
                                </Field>

                                <input
                                  type="file"
                                  onChange={(event) => {
                                    setFieldValue(
                                      "listingImage",
                                      event.target.files[0]
                                    );
                                  }}
                                  className={
                                    !!touched.image
                                      ? !!errors.image
                                        ? "form-control input_user is-invalid"
                                        : "form-control input_user is-valid"
                                      : "form-control"
                                  }
                                ></input>
                              </Box>
                              <Box className="flex justify-between items-center">
                                <button
                                  type="submit"
                                  className="py-2 px-5 bg-blue-600 rounded text-white shadow-md hover:bg-blue-700 duration-300"
                                >
                                  Submit
                                </button>
                                <button
                                  type="button"
                                  onClick={closeModal}
                                  className="py-2 px-5 bg-red-600 rounded text-white shadow-md hover:bg-red-700 duration-300"
                                >
                                  Cancel
                                </button>
                              </Box>
                            </form>
                          );
                        }}
                      </Formik>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>

        <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5 overflow-y-auto h-[70vh]">
          {listings.map((e, index) => {
            return (
              <Admin_Card
                key={index}
                details={e.details}
                image={e.image}
                name={e.name}
                _id={e._id}
                listingTouched={listingTouched}
                setListingTouched={setListingTouched}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Listing;
