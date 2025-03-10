export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method not allowed" });
    }
  
    try {
      const response = await fetch("https://formsubmit.co/rajeevkrishna.work@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      });
  
      if (response.ok) {
        return res.status(200).json({ message: "Email sent successfully!" });
      } else {
        return res.status(500).json({ message: "Failed to send email" });
      }
    } catch (error) {
      return res.status(500).json({ message: "Something went wrong", error: error.message });
    }
  }