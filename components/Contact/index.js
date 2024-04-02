import { useState } from "react";
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
  const [loading, setLoading] = useState(false);

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
      setLoading(true);
      const response = await axios(config);
      if (response.status == 200) {
        router.push("/success");
        reset();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="section_contact" id="contact">
      <div className="container">
        <div className="contact">
          <div className="contact_left py-8 px-4">
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
                <span>+49 17624227895</span>
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
              <a
                href="https://www.facebook.com/nelutofanconsult/"
                target="_blank"
                aria-label="facebook"
              >
                <FaFacebookSquare className="w-10 h-10" />
              </a>
              <a
                href="https://www.instagram.com/nelu.tofan.consult/"
                target="_blank"
                aria-label="instagram"
              >
                <FaInstagram className="w-10 h-10" />
              </a>
            </div>
          </div>
          <div className="py-8 sm:px-4">
            <div className="contact_right">
              <div className="contact_right__title">
                <span className="text-amber-800 text-sm font-medium tracking-wide uppercase">
                  Contact
                </span>
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
                        message: "Este prea lung",
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
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn_primery mt-3 flex items-center gap-2 justify-center"
                  >
                    {loading && (
                      <svg
                        role="status"
                        class="mr-2 w-4 h-4 text-gray-200 animate-spin  fill-[#17C68D]"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                    )}
                    Trimite
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
