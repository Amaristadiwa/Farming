export default function Map() {
  return (
    <div className="w-310 h-96 bg-gray-200 rounded-2xl overflow-hidden mx-8 mb-8">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.2037037419514!2d-0.1420069!3d51.5152229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b2f6c0f0c1d%3A0x2e3e3d8c7b5c7f0a!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
