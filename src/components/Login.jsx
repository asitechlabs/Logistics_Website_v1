import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as z from "zod";
import api from "../lib/axios";

const loginSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const registerSchema = z.object({
  full_name: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Name too long")
    .optional()
    .or(z.literal("")),
  email: z.string().email("Enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[0-9]/, "Must contain at least one number"),
});

const getPasswordStrength = (password) => {
  if (!password) return { score: 0, label: "", color: "", tailwindBg: "" };
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  const levels = [
    { label: "Very Weak", color: "#ef4444" },
    { label: "Weak", color: "#f97316" },
    { label: "Fair", color: "#eab308" },
    { label: "Good", color: "#22c55e" },
    { label: "Strong", color: "#10b981" },
    { label: "Very Strong", color: "#06b6d4" },
  ];
  return { score, ...levels[Math.min(score, levels.length - 1)] };
};

const EyeIcon = () => (
  <svg
    className="w-[17px] h-[17px]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = () => (
  <svg
    className="w-[17px] h-[17px]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

const Spinner = () => (
  <svg
    className="w-4 h-4 animate-spin"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
  >
    <circle cx="12" cy="12" r="10" strokeDasharray="40" strokeDashoffset="10" />
  </svg>
);

const AlertIcon = () => (
  <svg
    className="w-4 h-4 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

const CheckIcon = () => (
  <svg
    className="w-4 h-4 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const FloatingInput = ({ label, id, type = "text", register, error }) => {
  const [showPass, setShowPass] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (showPass ? "text" : "password") : type;

  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        <input
          {...register}
          id={id}
          type={inputType}
          placeholder=" "
          autoComplete={isPassword ? "current-password" : undefined}
          className={[
            "peer w-full pt-8 pb-2 px-6 bg-[#111d35] rounded-[14px] text-[#e8eef8] text-[15px] outline-none transition-all duration-200",
            "border-[1.5px]",
            error
              ? "border-red-500 shadow-[0_0_0_3px_rgba(239,68,68,0.12)] focus:border-red-500"
              : "border-[#1e2d4a] focus:border-[#4f8ef7] focus:shadow-[0_0_0_3px_rgba(79,142,247,0.18)]",
            isPassword ? "pr-11" : "",
          ].join(" ")}
        />
        <label
          htmlFor={id}
          className={[
            "absolute left-4 pointer-events-none transition-all duration-[180ms] origin-left",
            "top-1/2 -translate-y-1/2 text-[15px] font-light text-[#6b80a0]",
            "peer-focus:top-[10px] peer-focus:translate-y-0 peer-focus:scale-[0.78] peer-focus:font-medium",
            "peer-not-placeholder-shown:top-[10px] peer-not-placeholder-shown:translate-y-0 peer-not-placeholder-shown:scale-[0.78] peer-not-placeholder-shown:font-medium",
            error
              ? "peer-focus:text-red-500 peer-not-placeholder-shown:text-red-500"
              : "peer-focus:text-[#4f8ef7] peer-not-placeholder-shown:text-[#4f8ef7]",
          ].join(" ")}
        >
          {label}
        </label>
        {isPassword && (
          <button
            type="button"
            tabIndex={-1}
            onClick={() => setShowPass((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b80a0] hover:text-[#e8eef8] transition-colors p-1 rounded flex items-center"
          >
            {showPass ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        )}
      </div>
      {error && (
        <p className="text-[12px] text-red-500 pl-1 animate-[fadeIn_0.2s_ease]">
          {error.message}
        </p>
      )}
    </div>
  );
};

// ─── Password Input with Strength ────────────────────────────────────────────

const PasswordWithStrength = ({ register, error, watchedPassword }) => {
  const [show, setShow] = useState(false);
  const strength = getPasswordStrength(watchedPassword);

  return (
    <div className="flex flex-col gap-1">
      <div className="relative">
        <input
          {...register}
          id="reg-password"
          type={show ? "text" : "password"}
          placeholder=" "
          autoComplete="new-password"
          className={[
            "peer w-full pt-[18px] pb-2 px-4 pr-11 bg-[#111d35] rounded-[14px] text-[#e8eef8] text-[15px] outline-none transition-all duration-200",
            "border-[1.5px]",
            error
              ? "border-red-500 shadow-[0_0_0_3px_rgba(239,68,68,0.12)]"
              : "border-[#1e2d4a] focus:border-[#4f8ef7] focus:shadow-[0_0_0_3px_rgba(79,142,247,0.18)]",
          ].join(" ")}
        />
        <label
          htmlFor="reg-password"
          className={[
            "absolute left-4 pointer-events-none transition-all duration-[180ms] origin-left",
            "top-1/2 -translate-y-1/2 text-[15px] font-light text-[#6b80a0]",
            "peer-focus:top-[10px] peer-focus:translate-y-0 peer-focus:scale-[0.78] peer-focus:font-medium",
            "peer-not-placeholder-shown:top-[10px] peer-not-placeholder-shown:translate-y-0 peer-not-placeholder-shown:scale-[0.78] peer-not-placeholder-shown:font-medium",
            error
              ? "peer-focus:text-red-500 peer-not-placeholder-shown:text-red-500"
              : "peer-focus:text-[#4f8ef7] peer-not-placeholder-shown:text-[#4f8ef7]",
          ].join(" ")}
        >
          Password
        </label>
        <button
          type="button"
          tabIndex={-1}
          onClick={() => setShow((v) => !v)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b80a0] hover:text-[#e8eef8] transition-colors p-1 rounded flex items-center"
        >
          {show ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      </div>
      {error && (
        <p className="text-[12px] text-red-500 pl-1">{error.message}</p>
      )}
      {watchedPassword && (
        <div className="flex items-center gap-2.5 px-0.5 mt-1">
          <div className="flex flex-1 gap-1 h-[3px]">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex-1 h-full rounded-full transition-all duration-300"
                style={{
                  backgroundColor:
                    i <= strength.score ? strength.color : "#1e2d4a",
                  transitionDelay: `${i * 0.05}s`,
                }}
              />
            ))}
          </div>
          <span
            className="text-[11px] font-semibold tracking-wide whitespace-nowrap min-w-[64px] text-right"
            style={{ color: strength.color }}
          >
            {strength.label}
          </span>
        </div>
      )}
    </div>
  );
};

const Auth = () => {
  const [mode, setMode] = useState("login");
  const [serverError, setServerError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [isFlipping, setIsFlipping] = useState(false);

  const loginForm = useForm({ resolver: zodResolver(loginSchema) });
  const registerForm = useForm({ resolver: zodResolver(registerSchema) });

  const navigate = useNavigate();

  const watchedPassword = registerForm.watch("password", "");

  const switchMode = (next) => {
    if (isFlipping) return;
    setIsFlipping(true);
    setServerError(null);
    setSuccessMsg(null);
    setTimeout(() => {
      setMode(next);
      setIsFlipping(false);
    }, 350);
  };

  const onLogin = async (data) => {
    setServerError(null);
    try {
      const res = await api.post("/auth/login", data);
      const { access_token, refresh_token } = res.data.data;
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
      setSuccessMsg("Login successful! Redirecting…");
      console.log("LOGIN SUCCESS", res);
      navigate("/admin/dashboard");
      console.log("LOGIN SUCCESS11");

    } catch (err) {
      setServerError(
        err?.response?.data?.message || "Login failed. Check your credentials.",
      );
    }
  };

  const onRegister = async (data) => {
    setServerError(null);
    const payload = { ...data };
    if (!payload.full_name) delete payload.full_name;
    try {
      await api.post("/auth/register", payload);
      setSuccessMsg("Account created! You can now sign in.");
      setTimeout(() => switchMode("login"), 1800);
    } catch (err) {
      setServerError(
        err?.response?.data?.message || "Registration failed. Try again.",
      );
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#070b14] font-sans relative overflow-hidden px-4 py-6">
      {/* Ambient blobs */}
      <div className="absolute w-[500px] h-[500px] -top-[120px] -left-[150px] rounded-full blur-[80px] pointer-events-none bg-[radial-gradient(circle,rgba(79,142,247,0.12),transparent_70%)] animate-[drift_12s_ease-in-out_infinite_alternate]" />
      <div
        className="absolute w-[400px] h-[400px] -bottom-[80px] -right-[100px] rounded-full blur-[80px] pointer-events-none bg-[radial-gradient(circle,rgba(124,58,237,0.12),transparent_70%)] animate-[drift_16s_ease-in-out_infinite_alternate]"
        style={{ animationDelay: "-4s" }}
      />
      <div
        className="absolute w-[300px] h-[300px] top-[40%] left-[55%] rounded-full blur-[80px] pointer-events-none bg-[radial-gradient(circle,rgba(20,200,180,0.07),transparent_70%)] animate-[drift_20s_ease-in-out_infinite_alternate]"
        style={{ animationDelay: "-8s" }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(79,142,247,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(79,142,247,0.03) 1px,transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Card */}
      <div
        className={[
          "relative w-full max-w-[460px] bg-[#0d1526] border border-[#1e2d4a] rounded-3xl px-10 pt-9 pb-8",
          "shadow-[0_0_0_1px_rgba(79,142,247,0.05),0_24px_60px_rgba(0,0,0,0.5),0_0_80px_rgba(79,142,247,0.04)]",
          "transition-all duration-[350ms] ease-[cubic-bezier(.4,0,.2,1)]",
          isFlipping ? "scale-95 opacity-60 pointer-events-none" : "",
        ].join(" ")}
      >
        {/* Toggle strip */}
        <div className="relative flex bg-[#070b14] border border-[#1e2d4a] rounded-xl p-1 gap-0.5 mb-8">
          {["login", "register"].map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => mode !== m && switchMode(m)}
              className={[
                "flex-1 py-[9px] text-[13px] font-semibold tracking-[0.04em] rounded-[9px] relative z-10 transition-colors duration-200 border-none cursor-pointer bg-transparent",
                mode === m ? "text-[#e8eef8]" : "text-[#6b80a0]",
              ].join(" ")}
            >
              {m === "login" ? "Sign In" : "Register"}
            </button>
          ))}
          {/* Sliding indicator */}
          <div
            className={[
              "absolute top-1 h-[calc(100%-8px)] w-[calc(50%-4px)] bg-[#111d35] border border-[#2e4470] rounded-[9px] shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-[cubic-bezier(.4,0,.2,1)]",
              mode === "register"
                ? "translate-x-[calc(100%+0px)]"
                : "translate-x-0",
            ].join(" ")}
            style={{ left: "4px" }}
          />
        </div>

        {/* Header */}
        <div className="text-center mb-7">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#4f8ef7] to-[#7c3aed] mx-auto mb-4 flex items-center justify-center shadow-[0_4px_20px_rgba(79,142,247,0.35)]">
            <div
              className="w-4 h-4 bg-white rounded-[4px]"
              style={{
                clipPath: "polygon(0 0,100% 0,100% 60%,50% 100%,0 60%)",
              }}
            />
          </div>
          <h1 className="text-[26px] font-extrabold text-[#e8eef8] tracking-[-0.02em] leading-tight">
            {mode === "login" ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="text-[14px] text-[#6b80a0] mt-1.5 font-light">
            {mode === "login"
              ? "Sign in to access your dashboard"
              : "Fill in the details to get started"}
          </p>
        </div>

        {/* Banners */}
        {serverError && (
          <div className="flex items-center gap-2 px-3.5 py-[11px] rounded-[10px] text-[13.5px] mb-[18px] bg-red-500/10 border border-red-500/25 text-red-300 animate-[slideDown_0.25s_ease]">
            <AlertIcon />
            {serverError}
          </div>
        )}
        {successMsg && (
          <div className="flex items-center gap-2 px-3.5 py-[11px] rounded-[10px] text-[13.5px] mb-[18px] bg-green-500/10 border border-green-500/25 text-green-300 animate-[slideDown_0.25s_ease]">
            <CheckIcon />
            {successMsg}
          </div>
        )}

        {/* ── LOGIN ── */}
        {mode === "login" && (
          <form
            className="flex flex-col gap-[18px]"
            onSubmit={loginForm.handleSubmit(onLogin)}
            noValidate
          >
            <FloatingInput
              id="login-email"
              label="Email Address"
              type="email"
              register={loginForm.register("email")}
              error={loginForm.formState.errors.email}
            />
            <FloatingInput
              id="login-password"
              label="Password"
              type="password"
              register={loginForm.register("password")}
              error={loginForm.formState.errors.password}
            />
            <div className="flex justify-end -mt-1.5">
              <a
                href="#"
                className="text-[12.5px] text-[#4f8ef7] opacity-80 hover:opacity-100 transition-opacity no-underline"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              disabled={loginForm.formState.isSubmitting}
              className="w-full py-[14px] mt-1 bg-gradient-to-br from-[#4f8ef7] to-[#7c3aed] text-white text-[15px] font-bold tracking-[0.02em] rounded-[14px] border-none cursor-pointer flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(79,142,247,0.28)] transition-all duration-200 hover:opacity-90 hover:-translate-y-px hover:shadow-[0_8px_28px_rgba(79,142,247,0.38)] active:scale-[0.98] disabled:opacity-45 disabled:cursor-not-allowed"
            >
              {loginForm.formState.isSubmitting ? (
                <>
                  <Spinner /> Authenticating…
                </>
              ) : (
                "Sign In →"
              )}
            </button>
          </form>
        )}

        {/* ── REGISTER ── */}
        {mode === "register" && (
          <form
            className="flex flex-col gap-[18px]"
            onSubmit={registerForm.handleSubmit(onRegister)}
            noValidate
          >
            <FloatingInput
              id="reg-fullname"
              label="Full Name (optional)"
              type="text"
              register={registerForm.register("full_name")}
              error={registerForm.formState.errors.full_name}
            />
            <FloatingInput
              id="reg-email"
              label="Email Address"
              type="email"
              register={registerForm.register("email")}
              error={registerForm.formState.errors.email}
            />
            <PasswordWithStrength
              register={registerForm.register("password")}
              error={registerForm.formState.errors.password}
              watchedPassword={watchedPassword}
            />
            <button
              type="submit"
              disabled={registerForm.formState.isSubmitting}
              className="w-full py-[14px] mt-1 bg-gradient-to-br from-[#4f8ef7] to-[#7c3aed] text-white text-[15px] font-bold tracking-[0.02em] rounded-[14px] border-none cursor-pointer flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(79,142,247,0.28)] transition-all duration-200 hover:opacity-90 hover:-translate-y-px hover:shadow-[0_8px_28px_rgba(79,142,247,0.38)] active:scale-[0.98] disabled:opacity-45 disabled:cursor-not-allowed"
            >
              {registerForm.formState.isSubmitting ? (
                <>
                  <Spinner /> Creating Account…
                </>
              ) : (
                "Create Account →"
              )}
            </button>
          </form>
        )}

        {/* Footer */}
        <div className="mt-6 pt-5 border-t border-[#1e2d4a] text-center text-[13.5px] text-[#6b80a0]">
          {mode === "login" ? (
            <>
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => switchMode("register")}
                className="bg-transparent border-none text-[#4f8ef7] text-[13.5px] font-semibold cursor-pointer px-0.5 hover:opacity-75 transition-opacity"
              >
                Register
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => switchMode("login")}
                className="bg-transparent border-none text-[#4f8ef7] text-[13.5px] font-semibold cursor-pointer px-0.5 hover:opacity-75 transition-opacity"
              >
                Sign In
              </button>
            </>
          )}
        </div>
      </div>

      {/* Keyframe injection */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
        @keyframes drift {
          0% { transform: translate(0,0) scale(1); }
          100% { transform: translate(30px,40px) scale(1.08); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        h1 { font-family: 'Syne', sans-serif; }
      `}</style>
    </div>
  );
};

export default Auth;
