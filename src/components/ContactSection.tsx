import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  CheckCircle,
  X,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formState, setFormState] = useState({
    first_name: "",
    last_name: "",
    user_email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [popup, setPopup] = useState({
    show: false,
    type: "success", // 'success' or 'error'
    message: "",
  });

  // Function to show popup
  const showPopup = (type, message) => {
    setPopup({
      show: true,
      type,
      message,
    });
    // Auto hide after 5 seconds
    setTimeout(() => {
      setPopup({ show: false, type: "success", message: "" });
    }, 5000);
  };

  // Function to hide popup
  const hidePopup = () => {
    setPopup({ show: false, type: "success", message: "" });
  };

  // ACTUAL EmailJS implementation - this will send real emails
  const sendEmail = async (templateParams) => {
    return await emailjs.send(
      "service_kqud42r", // Your EmailJS service ID
      "template_almdhew", // Your EmailJS template ID
      templateParams,
      "bF7VpbbrJ3u9MayGO" // Your EmailJS public key
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validate form fields
      if (
        !formState.first_name ||
        !formState.last_name ||
        !formState.user_email ||
        !formState.subject ||
        !formState.message
      ) {
        throw new Error("Please fill in all fields");
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formState.user_email)) {
        throw new Error("Please enter a valid email address");
      }

      const templateParams = {
        first_name: formState.first_name,
        last_name: formState.last_name,
        user_email: formState.user_email,
        subject: formState.subject,
        message: formState.message,
        // Add additional fields that might be useful
        to_name: "Iben Anoos", // Your name
        reply_to: formState.user_email,
        from_name: `${formState.first_name} ${formState.last_name}`,
      };

      const response = await sendEmail(templateParams);
      console.log("Email sent successfully:", response);

      // Reset form on success
      setFormState({
        first_name: "",
        last_name: "",
        user_email: "",
        subject: "",
        message: "",
      });

      showPopup(
        "success",
        "Message sent successfully! Thank you for reaching out. I'll get back to you soon."
      );
    } catch (error) {
      console.error("Error sending message:", error);

      // Handle specific EmailJS errors
      let errorMessage = "Failed to send message. Please try again.";

      if (error.text) {
        errorMessage = `Error: ${error.text}`;
      } else if (error.status) {
        switch (error.status) {
          case 400:
            errorMessage =
              "Bad request. Please check your information and try again.";
            break;
          case 401:
            errorMessage =
              "Unauthorized. Please contact the site administrator.";
            break;
          case 402:
            errorMessage =
              "Email service limit reached. Please try again later.";
            break;
          case 404:
            errorMessage =
              "Service not found. Please contact the site administrator.";
            break;
          default:
            errorMessage = `Service error (${error.status}). Please try again later.`;
        }
      }

      showPopup("error", errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "iben.anoos@gmail.com",
      href: "mailto:iben.anoos@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+639999233934",
      href: "tel:+639999233934",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Cebu, Philippines",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/x1ren",
      username: "x1ren",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/iben-anoos-53a3a1361/",
      username: "Iben Anoos",
    },
  ];

  return (
    <>
      {/* Popup Notification */}
      {popup.show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                {popup.type === "success" ? (
                  <div className="p-2 bg-green-100 dark:bg-green-900 rounded-full">
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                ) : (
                  <div className="p-2 bg-red-100 dark:bg-red-900 rounded-full">
                    <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {popup.type === "success" ? "Success!" : "Error"}
                  </h3>
                </div>
              </div>
              <button
                onClick={hidePopup}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {popup.message}
            </p>
            <Button
              onClick={hidePopup}
              className="w-full"
              variant={popup.type === "success" ? "default" : "destructive"}
            >
              Close
            </Button>
          </div>
        </div>
      )}

      <section id="contact" className="min-h-screen py-32 bg-background">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-primary mb-6 tracking-tight">
              Get In Touch
            </h2>
            <p className="text-hero-muted text-xl max-w-3xl mx-auto font-light leading-relaxed">
              I'm always open to discussing new opportunities, interesting
              projects, or just having a chat about technology and development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="modern-card rounded-2xl p-10">
              <h3 className="text-3xl font-bold text-primary mb-8 tracking-tight">
                Send me a message
              </h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label
                      htmlFor="first_name"
                      className="text-foreground font-medium"
                    >
                      First Name *
                    </Label>
                    <Input
                      id="first_name"
                      placeholder="John"
                      className="bg-input border-border focus:border-primary h-12 rounded-xl"
                      value={formState.first_name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <Label
                      htmlFor="last_name"
                      className="text-foreground font-medium"
                    >
                      Last Name *
                    </Label>
                    <Input
                      id="last_name"
                      placeholder="Doe"
                      className="bg-input border-border focus:border-primary h-12 rounded-xl"
                      value={formState.last_name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <Label
                    htmlFor="user_email"
                    className="text-foreground font-medium"
                  >
                    Email *
                  </Label>
                  <Input
                    id="user_email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="bg-input border-border focus:border-primary h-12 rounded-xl"
                    value={formState.user_email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-3">
                  <Label
                    htmlFor="subject"
                    className="text-foreground font-medium"
                  >
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    placeholder="Project Collaboration"
                    className="bg-input border-border focus:border-primary h-12 rounded-xl"
                    value={formState.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-3">
                  <Label
                    htmlFor="message"
                    className="text-foreground font-medium"
                  >
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or just say hello!"
                    rows={6}
                    className="bg-input border-border focus:border-primary resize-none rounded-xl"
                    value={formState.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-modern font-medium h-12 rounded-xl"
                  disabled={isLoading}
                >
                  <Send className="w-5 h-5 mr-3" />
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-6 tracking-tight">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => {
                    const IconComponent = item.icon;
                    const content = (
                      <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-nav-hover transition-all duration-300 group">
                        <div className="p-3 bg-gradient-glass rounded-xl group-hover:shadow-glow transition-all duration-300">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground font-medium">
                            {item.label}
                          </div>
                          <div className="text-foreground font-semibold text-lg">
                            {item.value}
                          </div>
                        </div>
                      </div>
                    );

                    return item.href ? (
                      <a key={index} href={item.href} className="block">
                        {content}
                      </a>
                    ) : (
                      <div key={index}>{content}</div>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-6 tracking-tight">
                  Connect With Me
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-nav-hover transition-all duration-300 group"
                      >
                        <div className="p-3 bg-gradient-glass rounded-xl group-hover:shadow-glow transition-all duration-300">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground font-medium">
                            {social.label}
                          </div>
                          <div className="text-foreground font-semibold text-lg">
                            {social.username}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
