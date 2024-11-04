// export default function handler(req, res) {
//     if (req.method === 'GET') {
//       res.status(200).json({ status: 200, message: "Request received successfully" });
//     } else {
//       res.status(405).end(); // Method Not Allowed
//     }
//   }

export default function handler(req, res) {
    if (req.method === 'GET') {
      res.status(200);
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  }
  
