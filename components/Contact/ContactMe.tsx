"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS를 사용하여 메일 전송
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        to_name: "이하현", // 받는 사람 이름
      };

      // EmailJS 설정 (환경변수에서 가져오기)
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("메일 전송 실패:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col justify-center bg-gradient-to-br from-slate-50 to-blue-50 py-16 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8 md:px-16 lg:px-36">
        <div className="mb-12 text-center sm:mb-16">
          <div className="mb-3 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold text-blue-800 sm:mb-4 sm:px-6 sm:py-2 sm:text-sm">
            GET IN TOUCH
          </div>
          <h2 className="bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text pb-2 text-3xl font-bold leading-tight text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
            Contact Me
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-gray-600 sm:mt-6 sm:text-lg md:text-xl">
            새로운 기회와 협업에 언제나 열려있습니다. 편하게 연락주세요!
          </p>
        </div>

        {/* 연락 폼 */}
        <div className="justify-center rounded-2xl border border-gray-100 bg-white p-6 shadow-lg sm:p-8">
          <h3 className="mb-6 text-2xl font-bold text-gray-800">
            메시지 보내기
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                이름
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="이름을 입력해주세요"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                이메일
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="이메일을 입력해주세요"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                연락처 (선택사항)
              </label>
              <div className="relative">
                <FaPhone className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="연락처를 입력해주세요"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                메시지
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                placeholder="메시지를 입력해주세요"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  전송 중...
                </>
              ) : (
                <>
                  <IoSend />
                  메시지 전송
                </>
              )}
            </button>

            {submitStatus === "success" && (
              <div className="rounded-lg bg-green-100 p-3 text-green-800">
                메시지가 성공적으로 전송되었습니다!
              </div>
            )}

            {submitStatus === "error" && (
              <div className="rounded-lg bg-red-100 p-3 text-red-800">
                메시지 전송에 실패했습니다. 다시 시도해주세요.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
