export default function handler(req, res) {
    if(false){ 
      return res.status(401).json('Resource access not authorized')
    }
    res.status(200).json({
      username: 'david',
      email: 'david.ramirez@edu.ece.fr'
    })
  }