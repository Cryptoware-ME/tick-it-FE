import { Container, Row, Col, Form } from 'react-bootstrap'
import styles from './createEvent.module.scss'
import TickitButton from '../../components/tickitButton'
import { useFormik, Formik } from 'formik'
import Dropzone from '../../components/Dropzone'
import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import Dropdown from 'react-bootstrap/Dropdown'
import { useAuth } from '../../auth/useAuth'
import Edit from './edit'
import { useRouter } from 'next/router'
import { getCategories } from '../../axios/event.axios'
import { getOrganization } from '../../axios/organization.axios'
import { postEvent } from '../../axios/event.axios'

const CreateEvent = () => {
  // States
  const [filePreview, setFilePreview] = useState()
  const [imageError, setImageError] = useState(false)
  const [categoryError, setCategoryError] = useState(false)
  const [image, setImage] = useState()
  const [selectedValue, setSelectedValue] = useState()
  const [categories, setCategories] = useState([])
  const [organization, setOrganization] = useState('')
  const [categoryId, setCategoryId] = useState('')

  // Hooks
  const router = useRouter()
  const { user } = useAuth()

  // Functions
  const getOrganizationDetails = async (id) => {
    let organization = await getOrganization(
      JSON.stringify({
        where: { ownerId: id },
      }),
    )
    setOrganization(organization.data[0])
  }

  const postCreateEvent = async () => {
    postEvent({
      name: values.name,
      symbol: values.symbol,
      description: values.description,
      eventDate: values.date,
      location: values.location,
      banner: values.banner,
      media: '',
      urls: '',
      categoryId: categoryId,
      organizationId: organization.id,
    }).then((data) => {
      router.push(`/add-tickets/${data.id}`)
    })
  }

  const handleDropdownSelect = (eventKey) => {
    setSelectedValue(eventKey)
  }

  const schema = yup.object().shape({
    name: yup.string().required(),
    symbol: yup.string().max(3).required(),
    date: yup.date().required(),
    location: yup.string().required(),
    description: yup.string().required(),
  })
  const formik = useFormik({
    initialValues: {
      name: '',
      symbol: '',
      date: '',
      location: '',
      description: '',
      banner: '',
      category: '',
    },
    validationSchema: schema,
    onSubmit: async () => {
      if (image) {
        setImageError(false)
        values.banner = image
        if (selectedValue) {
          setCategoryError(false)
          values.category = selectedValue
          postCreateEvent()
        } else {
          setCategoryError(true)
        }
      } else {
        setImageError(true)
      }
    },
  })
  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    handleBlur,
    setFieldValue,
    setFieldTouched,
    isSubmitting,
    isValid,
    touched,
    setErrors,
    status,
    setValues,
  } = formik

  useEffect(() => {
    if (!user) {
      router.push('/')
    } else if (user?.user) {
      getCategories().then((data) => {
        setCategories(data.data)
      })
      getOrganizationDetails(user?.user.id)
    } else {
      getCategories().then((data) => {
        setCategories(data.data)
      })
      getOrganizationDetails(user?.id)
    }
  }, [user])

  return (
    <div className={styles.Wrapper}>
      <Form>
        <Container style={{ paddingTop: '24px', paddingBottom: '48px' }}>
          <p className="pageTitle">Create Event</p>

          <div style={{ marginTop: '48px' }}>
            <p className="section-title">Event Details</p>
            <div style={{ marginTop: '24px ' }}>
              <Dropzone
                filePreview={filePreview}
                setFilePreview={setFilePreview}
                setImage={setImage}
                text="Banner (max 1MB)"
              />
              <div style={{ height: '20px' }}>
                {imageError ? (
                  <div className={styles.errors}>
                    <p className={styles.error}> Image is required field</p>
                  </div>
                ) : null}
              </div>
            </div>

            <p className={styles.title}>Name</p>
            <div className={styles.InputDiv}>
              <input
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className="modalInput"
                style={{ color: '#656565' }}
              />
            </div>
            <div style={{ height: '20px' }}>
              {errors.name && touched.name ? (
                <div className={styles.errors}>
                  <p className={styles.error}> {errors.name}</p>
                </div>
              ) : null}
            </div>

            <p className={styles.title}>Symbol</p>
            <div className={styles.InputDiv}>
              <input
                id="symbol"
                name="symbol"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.symbol}
                className="modalInput"
                style={{ color: '#656565' }}
              />
            </div>
            <div style={{ height: '20px' }}>
              {errors.symbol && touched.symbol ? (
                <div className={styles.errors}>
                  <p className={styles.error}> {errors.symbol}</p>
                </div>
              ) : null}
            </div>

            <p className={styles.title}>Date & Time</p>
            <div className={styles.InputDiv}>
              <input
                id="date"
                name="date"
                type="datetime-local"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.date}
                className="modalInput"
                style={{ color: '#656565' }}
              />
            </div>
            <div style={{ height: '20px' }}>
              {errors.date && touched.date ? (
                <div className={styles.errors}>
                  <p className={styles.error}> {errors.date}</p>
                </div>
              ) : null}
            </div>

            <p className={styles.title}>Location</p>
            <div className={styles.InputDiv}>
              <input
                id="location"
                name="location"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.location}
                className="modalInput"
                style={{ color: '#656565' }}
              />
            </div>
            <div style={{ height: '20px' }}>
              {errors.location && touched.location ? (
                <div className={styles.errors}>
                  <p className={styles.error}> {errors.location}</p>
                </div>
              ) : null}
            </div>
            <p className={styles.title}>Category</p>
            <div className={styles.InputDiv}>
              <Dropdown
                onBlur={() => {
                  if (!selectedValue) {
                    setCategoryError(true)
                  } else {
                    setCategoryError(false)
                  }
                }}
                onSelect={handleDropdownSelect}
              >
                <Dropdown.Toggle
                  className="modalInput"
                  style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                  variant="success"
                  id="dropdown-basic"
                >
                  {selectedValue ? selectedValue : 'Select Event Category'}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {categories.map((category, index) => (
                    <Dropdown.Item
                      eventKey={category.name}
                      key={index}
                      onClick={() => {
                        setCategoryId(category.id)
                      }}
                    >
                      {category.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div style={{ height: '20px' }}>
              {categoryError ? (
                <div className={styles.errors}>
                  <p className={styles.error}> Category is required field</p>
                </div>
              ) : null}
            </div>
            <p style={{ marginTop: '16px' }} className={styles.title}>
              Description
            </p>
            <div className={styles.descriptionDiv}>
              <textarea
                id="description"
                name="description"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                className="modalInput"
                style={{ minHeight: '120px' }}
              />
            </div>
            <div style={{ height: '20px' }}>
              {errors.description && touched.description ? (
                <div className={styles.errors}>
                  <p className={styles.error}> {errors.description}</p>
                </div>
              ) : null}
            </div>
          </div>

          <div className={styles.appButton}>
            <TickitButton onClick={handleSubmit} text="CREATE" />
          </div>
        </Container>
      </Form>
    </div>
  )
}
export default CreateEvent
