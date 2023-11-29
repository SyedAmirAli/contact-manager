import React from "react";
import ContactForm from "./components/contactForm";
import ContactList from "./components/contactList";

function App() {
  return (
    <div className="container w-full flex items-center justify-center min-h-screen">
      <div className="min-w-[650px] w-auto mx-auto bg-slate-700 p-6 rounded-lg mt-20 text-white">
        <div>
          <h1 className="text-3xl text-center font-bold text-slate-400">
            Contact Manager
          </h1>
          <div className="py-10 border-b border-[#be123c]">
            <ContactForm />
          </div>
          <div className="py-5 space-y-5">
            <ContactList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
