import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar mx-auto flex items-center">
        <div className="max-w-lg text-center">
          <Image
            src="/assets/icons/logo-full.svg"
            height={40} // Adjusted height
            width={160} // Adjusted width to match the displayed size
            alt="Patient Logo"
            className="mb-12"
          />
          <PatientForm/>
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">© 2025 CarePulse </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
      src="/assets/images/onboarding-img.png"
      height={1000}
      width={1000}
      alt='patient'
      className="side-img max-w-[50%]"
      />
    </div>
  );
}
