import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
  CreditCard,
  Shield,
  Truck,
  RotateCcw,
} from "lucide-react";

const footerLinks = {
  shop: [
    { name: "New Arrivals", href: "#" },
    { name: "Best Sellers", href: "#" },
    { name: "Sale", href: "#" },
    { name: "Collections", href: "#" },
    { name: "Gift Cards", href: "#" },
  ],
  support: [
    { name: "Contact Us", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Shipping Info", href: "#" },
    { name: "Returns", href: "#" },
    { name: "Size Guide", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Affiliates", href: "#" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const paymentMethods = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay"];

const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden cursor-pointer gradient-top-border">

      {/* Left-bottom yellow glow */}
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-yellow-400/20 blur-[200px] rounded-full pointer-events-none" />

      {/* Right-top yellow glow */}
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-yellow-400/20 blur-[200px] rounded-full pointer-events-none" />

      {/* Features Bar */}
      <div className="border-b border-white/10 relative z-10">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Truck, title: "Free Shipping", desc: "On orders over $100" },
              { icon: RotateCcw, title: "Easy Returns", desc: "30-day return policy" },
              { icon: Shield, title: "Secure Payment", desc: "100% secure checkout" },
              { icon: CreditCard, title: "Gift Cards", desc: "Perfect for gifting" },
            ].map((feature) => (
              <div key={feature.title} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-yellow-400 " />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-white">{feature.title}</h4>
                  <p className="text-xs text-white/60">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center bg-yellow-400">
                <span className="text-black font-bold text-xl ">L</span>
              </div>
              <span className="text-2xl font-bold">
                <span className=" text-yellow-400">LUXE</span>
                <span className="text-white">STORE</span>
              </span>
            </a>

            <p className="text-white/70 mb-6 max-w-sm">
              Elevating your style with premium fashion and luxury accessories.
              Your destination for contemporary elegance.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-white/70">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-yellow-400" />
                <span>123 Fashion Ave, New York, NY 10001</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-yellow-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-yellow-400" />
                <span>hello@luxestore.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-xl text-white bg-white/5 hover:bg-yellow-400 hover:text-black flex items-center justify-center transition"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <a className="text-white/70 hover:text-yellow-400 text-sm">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a className="text-white/70 hover:text-yellow-400 text-sm">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a className="text-white/70 hover:text-yellow-400 text-sm">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white/70">
          <p className="text-sm">© 2024 LUXESTORE. All rights reserved.</p>

          {/* Payment Methods */}
          <div className="flex items-center gap-2">
            <span className="text-xs mr-2">We accept:</span>
            {paymentMethods.map((method) => (
              <span key={method} className="px-3 py-1.5 rounded-md bg-white/5 text-xs font-medium">
                {method}
              </span>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex gap-4">
            <a className="text-sm hover:text-yellow-400">Privacy Policy</a>
            <a className="text-sm hover:text-yellow-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
