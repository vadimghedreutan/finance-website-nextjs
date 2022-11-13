import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";
import InsuranceCards from "../components/InsuranceCards";
import Contact from "../components/Contact";
import Seo from "../components/Seo";

const Abonare = () => {
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
      url: "/api/abonare",
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    try {
      setLoading(true);
      const response = await axios(config);
      if (response.status == 200) {
        router.push("/");
        reset();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <Seo
        title="TofanConsult | Abonare"
        description="Tofan Consult - Având libertatea de a lucra cu peste 350 de companii financiare din Germania, biroul nostru de consultanță te poate ajuta pe tine să găsești asigurările, creditele și produsele financiare de care ai cu adevărat nevoie."
      />

      <div className="grid place-content-center py-8">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="py-4 sm:py-8 px-4 relative">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold flex flex-col mb-4">
                Află primul
                <span>despre schimbările care au loc în Germania</span>
              </h1>
              <p className="text-gray-500 text-lg sm:w-3/4 w-full">
                Abonează-te acum și afla gratuit informații pentru care unii
                plătesc bani ca să le știe!
              </p>
              <form
                onSubmit={handleSubmit(onSubmitForm)}
                className="mt-8 flex items-center"
              >
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
                      message: "Trebuie sa fie o adresă de e-mail existentă",
                    },
                  })}
                  type="text"
                  autoComplete="off"
                  placeholder="E-mail"
                  className="w-full px-2 py-2 shadow-sm focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="btn_secondary flex items-center gap-2"
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
                <span className="text-red-700 text-xs absolute bottom-0 sm:bottom-1 left-4">
                  {errors.email?.message}
                </span>
              </form>
            </div>
            <div className="text-center">
              <Image src="/svg/newsletter.svg" width="600" height="400" />
            </div>
          </div>
        </div>
      </div>
      <InsuranceCards />
      <Contact />
    </>
  );
};

export default Abonare;
