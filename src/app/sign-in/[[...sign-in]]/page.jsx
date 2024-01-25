import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return <section className="p-5 py-16 w-full flex justify-center items-center">
    <SignIn />
  </section>;
}