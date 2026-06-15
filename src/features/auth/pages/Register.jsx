import { useState } from "react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [focused, setFocused] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  };

  const fields = [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Your full name",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "you@email.com",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "••••••••••",
    },
    {
      name: "confirm",
      label: "Confirm Password",
      type: "password",
      placeholder: "••••••••••",
    },
  ];

  return (
    <div
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #2d3561 0%, #c05c7e 100%)",
      }}
    >
      {/* Blobs */}
      <div
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full w-96 h-96 opacity-20"
        style={{ background: "radial-gradient(circle, #6a7fd8, transparent)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-25 translate-x-1/3 translate-y-1/3"
        style={{ background: "radial-gradient(circle, #f06292, transparent)" }}
      />

      {/* Dot grid top-left */}
      <div
        className="absolute top-6 left-6 grid gap-1.5 opacity-30"
        style={{ gridTemplateColumns: "repeat(7, 1fr)" }}
      >
        {Array.from({ length: 42 }).map((_, i) => (
          <div key={i} className="w-1 h-1 bg-blue-200 rounded-full" />
        ))}
      </div>

      {/* Dot grid bottom-right */}
      <div
        className="absolute bottom-6 right-6 grid gap-1.5 opacity-20"
        style={{ gridTemplateColumns: "repeat(7, 1fr)" }}
      >
        {Array.from({ length: 42 }).map((_, i) => (
          <div key={i} className="w-1 h-1 bg-pink-200 rounded-full" />
        ))}
      </div>

      {/* Bottom-left brand mark */}
      <div className="absolute flex items-end gap-1 bottom-8 left-8">
        <div
          className="w-2 h-5 bg-pink-400 rounded-full opacity-90"
          style={{ transform: "rotate(-20deg)" }}
        />
        <div
          className="w-2 bg-yellow-400 rounded-full h-7 opacity-85"
          style={{ transform: "rotate(0deg)" }}
        />
        <div
          className="w-2 h-5 bg-indigo-400 rounded-full opacity-80"
          style={{ transform: "rotate(20deg)" }}
        />
      </div>

      {/* Card */}
      <div
        className="relative z-10 flex overflow-hidden shadow-2xl rounded-3xl"
        style={{ width: "min(860px, 95vw)", minHeight: "520px" }}
      >
        {/* LEFT PANEL */}
        <div
          className="relative flex-col justify-between hidden p-8 overflow-hidden md:flex"
          style={{
            width: "45%",
            background:
              "linear-gradient(160deg, #5b6ee1 0%, #8b9cf7 55%, #a78bfa 100%)",
          }}
        >
          {/* Pill shapes */}
          <div className="absolute w-5 h-5 bg-pink-400 rounded-full bottom-14 left-8 opacity-90" />
          <div
            className="absolute bottom-20 left-14 w-3.5 h-20 rounded-full bg-yellow-300 opacity-80"
            style={{ transform: "rotate(-25deg)" }}
          />
          <div
            className="absolute bottom-8 left-20 w-3.5 h-24 rounded-full bg-pink-400 opacity-70"
            style={{ transform: "rotate(15deg)" }}
          />
          <div
            className="absolute bottom-6 left-36 w-3.5 h-16 rounded-full bg-yellow-300 opacity-65"
            style={{ transform: "rotate(-10deg)" }}
          />

          {/* Heart watermark */}
          <div
            className="absolute text-white select-none bottom-12 right-6 opacity-10"
            style={{ fontSize: 150, lineHeight: 1 }}
          >
            ♥
          </div>

          {/* Logo */}
          <div className="z-10 flex items-center gap-2">
            <div className="flex items-center justify-center rounded-full w-7 h-7 bg-white/20">
              <div className="text-lg leading-none text-pink-300">♥</div>
            </div>
            <span
              className="text-base font-bold tracking-wide text-white"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              My Discounted Labs
            </span>
          </div>

          {/* Illustration — pure CSS */}
          <div className="z-10 flex items-center justify-center my-4">
            <div className="relative flex items-end justify-center overflow-hidden border-4 rounded-full shadow-xl w-44 h-44 bg-white/15 border-white/20">
              <div className="absolute bottom-0 w-32 h-24 rounded-t-full bg-blue-300/50" />
              <div
                className="absolute w-16 rounded-full bottom-16 h-18 bg-white/40"
                style={{ height: "4.5rem" }}
              />
              <div
                className="absolute h-4 rounded-full bottom-32 w-18 bg-white/25"
                style={{ width: "4.5rem" }}
              />
              <div
                className="absolute w-2 h-10 rounded-full bottom-12 left-9 bg-pink-400/70"
                style={{ transform: "rotate(20deg)" }}
              />
              <div className="absolute w-4 h-4 rounded-full bottom-8 left-12 bg-pink-400/60" />
            </div>
          </div>

          <p
            className="z-10 text-xs text-center text-white/50"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Copyright © 2024 · My Discounted Labs · All rights reserved.
          </p>
        </div>

        {/* RIGHT PANEL */}
        <div
          className="flex flex-col justify-between flex-1 p-8"
          style={{
            background: "linear-gradient(180deg, #f0f4ff 0%, #fafafa 100%)",
          }}
        >
          {/* Heading */}
          <div className="mb-5">
            <h2
              className="text-xl font-extrabold text-slate-800"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Create Account
            </h2>
            <p
              className="mt-1 text-xs text-slate-400"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Join My Discounted Labs today — it's free!
            </p>
            <div className="w-10 h-1 mt-2 bg-indigo-500 rounded-full" />
          </div>

          {/* Form Card */}
          <div className="p-6 mb-4 bg-white shadow-lg rounded-2xl">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4">
                {fields.map(({ name, label, type, placeholder }) => {
                  const isPassword = name === "password";
                  const isConfirm = name === "confirm";
                  const showTog = isPassword ? showPassword : showConfirm;
                  const actualType =
                    isPassword || isConfirm
                      ? showTog
                        ? "text"
                        : "password"
                      : type;

                  return (
                    <div key={name} className="relative">
                      <label
                        className="block mb-1 text-xs font-bold tracking-wider text-indigo-500"
                        style={{ fontFamily: "'Nunito', sans-serif" }}
                      >
                        {label}
                      </label>
                      <input
                        name={name}
                        type={actualType}
                        value={form[name]}
                        onChange={handleChange}
                        onFocus={() =>
                          setFocused((f) => ({ ...f, [name]: true }))
                        }
                        onBlur={() =>
                          setFocused((f) => ({ ...f, [name]: false }))
                        }
                        placeholder={placeholder}
                        className="w-full py-1 text-sm transition-all duration-200 bg-transparent border-b-2 outline-none text-slate-700 placeholder:text-slate-300"
                        style={{
                          borderColor: focused[name] ? "#5b6ee1" : "#e2e8f0",
                          fontFamily: "'Nunito', sans-serif",
                          paddingRight:
                            isPassword || isConfirm ? "2.5rem" : undefined,
                        }}
                      />
                      {(isPassword || isConfirm) && (
                        <button
                          type="button"
                          onClick={() =>
                            isPassword
                              ? setShowPassword((s) => !s)
                              : setShowConfirm((s) => !s)
                          }
                          className="absolute right-0 bottom-1.5 w-7 h-7 flex items-center justify-center text-slate-400 hover:text-indigo-500 transition-colors"
                        >
                          {showTog ? (
                            <div className="relative w-5 h-5">
                              <div className="absolute inset-0 border-2 border-current rounded-full" />
                              <div className="absolute w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-current rounded-full top-1/2 left-1/2" />
                            </div>
                          ) : (
                            <div className="relative w-5 h-3">
                              <div className="absolute inset-0 border-2 border-current rounded-full" />
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-px h-5 rotate-45 bg-current rounded-full" />
                              </div>
                            </div>
                          )}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-6 text-sm font-bold tracking-widest text-white uppercase transition-all duration-200 rounded-xl hover:opacity-90 active:scale-95"
                style={{
                  background: submitted
                    ? "linear-gradient(90deg, #22c55e, #16a34a)"
                    : "linear-gradient(90deg, #5b6ee1, #818cf8)",
                  fontFamily: "'Nunito', sans-serif",
                  boxShadow: "0 6px 24px rgba(91,110,225,0.35)",
                }}
              >
                {submitted ? "✓ Account Created!" : "Sign Up"}
              </button>
            </form>
          </div>

          {/* Already have account */}
          <p
            className="mb-4 text-xs text-center"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            <span className="text-slate-400">Already have an account? </span>
            <a
              href="/login"
              className="font-bold text-red-500 no-underline transition-colors hover:text-red-600"
            >
              Sign In
            </a>
          </p>

          {/* Social */}
          <div className="flex justify-center gap-3 mb-4">
            {["in", "ig", "fb", "tw", "pt"].map((label) => (
              <button
                key={label}
                className="flex items-center justify-center w-8 h-8 text-xs font-bold uppercase transition-all duration-150 rounded-full bg-slate-100 hover:bg-indigo-100 hover:text-indigo-500 text-slate-400"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Contact */}
          <div className="flex justify-center gap-6">
            <span
              className="flex items-center gap-1.5 text-xs text-slate-400"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              <div className="w-3.5 h-3.5 rounded-full border border-slate-300 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-slate-400" />
              </div>
              959912**67
            </span>
            <span
              className="flex items-center gap-1.5 text-xs text-slate-400"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              <div className="w-3.5 h-3.5 rounded border border-slate-300" />
              info@mydiscountedlabs.in
            </span>
          </div>
        </div>
      </div>

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');`}</style>
    </div>
  );
}
