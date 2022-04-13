import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";
import {
  FaCheckCircle,
  FaArrowAltCircleRight,
  FaFacebookSquare,
  FaInstagram,
  FaArrowAltCircleDown,
} from "react-icons/fa";

import {
  PhoneIcon,
  MailIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const router = useRouter();

  async function onSubmitForm(values) {
    let config = {
      method: "post",
      url: "/api/contact",
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    try {
      const response = await axios(config);
      if (response.status == 200) {
        router.push("/success");
        reset();
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <section className="section_contact" id="contact">
      <div className="container">
        <div className="contact">
          <div className="contact_left">
            <div className="contact_left__title">
              <h1 className="flex flex-col">
                Contactează-ne acum. <span>E simplu!</span>
              </h1>
              <div className="flex items-center">
                <span>
                  <FaCheckCircle className="w-5 h-5 mr-2" />
                </span>
                <p>Completează formularul alăturat</p>
                <span className="hidden md:inline-flex">
                  <FaArrowAltCircleRight className="w-5 h-5 ml-2" />
                </span>
                <span className="md:hidden">
                  <FaArrowAltCircleDown className="w-5 h-5 ml-2" />
                </span>
              </div>
              <div className="flex items-center">
                <span>
                  <FaCheckCircle className="w-5 h-5 mr-2" />
                </span>
                <p>Te sunam pentru a stabili o programare gratuită </p>
              </div>
              <div className="flex items-center">
                <span>
                  <FaCheckCircle className="w-5 h-5 mr-2" />
                </span>
                <p>Ne vedem la birou sau pe Whatsapp</p>
              </div>
            </div>
            <div className="contact_left__address">
              <div className="contact_left__address-phone">
                <PhoneIcon />
                <span>+49 178 3096 185</span>
              </div>
              <div className="contact_left__address-mail">
                <MailIcon />
                <a href="mailto:nelutofanconsult@gmail.com">
                  nelutofanconsult@gmail.com
                </a>
              </div>
              <div className="contact_left__address-location">
                <LocationMarkerIcon />
                <span>Luitgardstraße 14-18, 75177 Pforzheim</span>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.facebook.com" target="_blank">
                <FaFacebookSquare className="w-12 h-12" />
              </a>
              <a
                href="https://www.instagram.com/nelu.tofan.consult/"
                target="_blank"
              >
                <FaInstagram className="w-12 h-12" />
              </a>
            </div>
          </div>
          <div className="contact_right">
            <div className="contact_right__title">
              <span>Contact</span>
              <h1>Vreau o programare</h1>
            </div>
            <div className="contact_right__form">
              <form onSubmit={handleSubmit(onSubmitForm)}>
                <input
                  {...register("firstName", {
                    required: {
                      value: true,
                      message: "Scrieți numele dumneavoastră ",
                    },
                    maxLength: 20,
                  })}
                  type="text"
                  autoComplete="off"
                  placeholder="Nume, prenume"
                />
                <span>{errors.firstName?.message}</span>
                <input
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Scrieți numărul de telefon",
                    },
                  })}
                  type="number"
                  autoComplete="off"
                  placeholder="Telefon"
                />
                <span>{errors.phone?.message}</span>
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Scrieți adresa de email",
                    },
                    maxLength: {
                      value: 120,
                      message: "This is to long",
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "This needs to be a valid email address",
                    },
                  })}
                  type="text"
                  autoComplete="off"
                  placeholder="E-mail"
                />
                <span>{errors.email?.message}</span>
                <textarea
                  {...register("message", {
                    required: {
                      value: true,
                      message: "Adăugați un mesaj",
                    },
                  })}
                  placeholder="Mesaj"
                ></textarea>
                <span>{errors.message?.message}</span>
                <button type="submit" className="btn_primery mt-3">
                  Trimite
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
