import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/router'

import {
  PhoneIcon,
  MailIcon,
  LocationMarkerIcon,
} from '@heroicons/react/outline'

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const router = useRouter()

  async function onSubmitForm(values) {
    let config = {
      method: 'post',
      url: '/api/contact',
      headers: {
        'Content-Type': 'application/json',
      },
      data: values,
    }

    try {
      const response = await axios(config)
      if (response.status == 200) {
        router.push('/success')
        reset()
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <section className="section_contact" id="contact">
      <div className="container">
        <div className="contact">
          <div className="contact_left">
            <div className="contact_left__title">
              <h1>Get A Quote Now</h1>
              <p>
                Completați formularul și echipa noastră vă va contacta în termen
                de 24 de ore
              </p>
            </div>
            <div className="contact_left__address">
              <div className="contact_left__address-phone">
                <PhoneIcon />
                <span>+49 1783096185</span>
              </div>
              <div className="contact_left__address-mail">
                <MailIcon />
                <span>tofanconsult@gmail.com</span>
              </div>
              <div className="contact_left__address-location">
                <LocationMarkerIcon />
                <span>75181, Pforzheim</span>
              </div>
            </div>
            <div className="contact_left__social">
              <a href="https://www.facebook.com" target="_blank">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a
                href="https://www.instagram.com/nelu.tofan.consult/"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="contact_right">
            <div className="contact_right__title">
              <span>Contact</span>
              <h1>How Can We Help You?</h1>
            </div>
            <div className="contact_right__form">
              <form onSubmit={handleSubmit(onSubmitForm)}>
                <input
                  {...register('firstName', {
                    required: {
                      value: true,
                      message: 'You need enter your name',
                    },
                    maxLength: 20,
                  })}
                  type="text"
                  autoComplete="off"
                  placeholder="Nume, prenume"
                />
                <span>{errors.firstName?.message}</span>
                <input
                  {...register('phone', {
                    required: {
                      value: true,
                      message: 'You must enter your phone number',
                    },
                    minLength: {
                      value: 12,
                      message: 'This is to short',
                    },
                    maxLength: {
                      value: 20,
                      message: 'This is to long',
                    },
                  })}
                  type="number"
                  autoComplete="off"
                  placeholder="Telefon"
                />
                <span>{errors.phone?.message}</span>
                <input
                  {...register('email', {
                    required: {
                      value: true,
                      message: 'You must enter your email address',
                    },
                    maxLength: {
                      value: 120,
                      message: 'This is to long',
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'This needs to be a valid email address',
                    },
                  })}
                  type="text"
                  autoComplete="off"
                  placeholder="E-mail"
                />
                <span>{errors.email?.message}</span>
                <textarea
                  {...register('message', {
                    required: {
                      value: true,
                      message: 'You must enter your message',
                    },
                    maxLength: {
                      value: 1000,
                      message:
                        'Your message can not be more than 1000 characters',
                    },
                    minLength: {
                      value: 30,
                      message: 'Your message must be longer than this!',
                    },
                  })}
                  placeholder="Mesaj"
                ></textarea>
                <span>{errors.message?.message}</span>
                <button type="submit" className="btn_primery mt-3">
                  Consultatie
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
