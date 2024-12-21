import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Movie=createContext()


const MovieProvider = ({children}) => {

  const navigate = useNavigate()

  const [data,setData] = useState(MovieData)

  const [detail,setdetail] = useState([])

  const seeDetails = (id) => {
  navigate("/detail")
    let MovieId = [id]
    setdetail(MovieId)
  }
  


  return(
    <Movie.Provider value={{
    data,
    seeDetails,
    detail

    }}>
      {children}
    </Movie.Provider>
  )
}



const MovieData=[
  {
    "id": 1,
    "name": "Kabhi Alvida Naa Kehna",
    "release_date": "2006-08-11",
    "rating": 7.5,
    "cast": [
      "Shah Rukh Khan",
      "Rani Mukerji",
      "Abhishek Bachchan",
      "Preity Zinta",
      "Amitabh Bachchan",
      "Kirron Kher"
    ],
    "location": "New York City, USA",
    "download_link": "https://www.moviedownloadsite.com/kabhi-alvida-naa-kehna",
    "image": "Images/im1.jpg",
    "description": "A drama that explores complex relationships, infidelity, and the emotional journey of a married couple as they struggle with their feelings and lives.",
    
  },
  {
    "id": 2,
    "name": "Lagaan",
    "release_date": "2001-06-15",
    "rating": 8.1,
    "cast": [
      "Aamir Khan",
      "Gracy Singh",
      "Rachel Shelley",
      "Paul Blackthorne",
      "Amin Hajee",
      "Javed Khan"
    ],
    "location": "Rajasthan, India",
    "download_link": "https://www.moviedownloadsite.com/lagaan",
   "image": "Images/images2.jpeg",
    "description": "Set during British colonial rule in India, the film tells the story of a village that challenges British officers to a cricket match to avoid high taxes."
  },
  {
    "id": 3,
    "name": "Dhoom 2",
    "release_date": "2006-11-24",
    "rating": 7.6,
    "cast": [
      "Hrithik Roshan",
      "Aishwarya Rai",
      "Abhishek Bachchan",
      "Uday Chopra",
      "Rimi Sen"
    ],
    "location": "Brazil, South Africa, Dubai",
    "download_link": "https://www.moviedownloadsite.com/dhoom-2",
    "image": "Images/images3.jpg",
    "description": "A sequel in the *Dhoom* franchise, this movie follows a high-tech thief who travels around the world to steal priceless artifacts, while the police try to stop him."
  },
  {
    "id": 4,
    "name": "3 Idiots",
    "release_date": "2009-12-25",
    "rating": 8.4,
    "cast": [
      "Aamir Khan",
      "Kareena Kapoor",
      "R. Madhavan",
      "Sharman Joshi",
      "Boman Irani",
      "Omi Vaidya"
    ],
    "location": "Delhi, India, Ladakh",
    "download_link": "https://www.moviedownloadsite.com/3-idiots",
 "image": "Images/images4.jpeg",
    "description": "A comedy-drama that follows three engineering students as they deal with the pressures of academics, friendships, and personal ambitions."
  },
  {
    "id": 5,
    "name": "Zindagi Na Milegi Dobara",
    "release_date": "2011-07-15",
    "rating": 8.1,
    "cast": [
      "Hrithik Roshan",
      "Farhan Akhtar",
      "Abhay Deol",
      "Katrina Kaif",
      "Kalki Koechlin"
    ],
    "location": "Spain",
    "download_link": "https://www.moviedownloadsite.com/zindagi-na-milegi-dobara",
  "image": "Images/images5.avif",
    "description": "A heartwarming road trip movie about three friends who embark on a journey across Spain and discover life, love, and friendship along the way."
  },
  {
    "id": 6,
    "name": "Kabir Singh",
    "release_date": "2019-06-21",
    "rating": 7.1,
    "cast": [
      "Shahid Kapoor",
      "Kiara Advani",
      "Suresh Oberoi",
      "Arjan Bajwa",
      "Nikunj Bahl"
    ],
    "location": "Delhi, India",
    "download_link": "https://www.moviedownloadsite.com/kabir-singh",
   "image": "Images/images6.jpg",
    "description": "A passionate love story about a surgeon who spirals into self-destruction after a broken relationship, struggling with anger, addiction, and heartbreak."
  },
  {
    "id": 7,
    "name": "Taare Zameen Par",
    "release_date": "2007-12-21",
    "rating": 8.4,
    "cast": [
      "Aamir Khan",
      "Darsheel Safary",
      "Tanay Chheda",
      "Vipin Sharma",
      "Sachet Engineer"
    ],
    "location": "Mumbai, India",
    "download_link": "https://www.moviedownloadsite.com/taare-zameen-par",
   "image": "Images/images7.jpeg",
    "description": "A heart-touching film about a dyslexic child and his inspiring teacher who helps him find his way in life, learning that every child has their own unique abilities."
  },
  {
    "id": 8,
    "name": "Bajirao Mastani",
    "release_date": "2015-12-18",
    "rating": 7.6,
    "cast": [
      "Ranveer Singh",
      "Deepika Padukone",
      "Priyanka Chopra",
      "Tanvi Azmi",
      "Vaibhav Tatwawdi"
    ],
    "location": "Maharashtra, India",
    "download_link": "https://www.moviedownloadsite.com/bajirao-mastani",
   "image": "Images/images8.jpg",
    "description": "A historical epic set in the 18th century, it portrays the love story of Peshwa Bajirao and his second wife, Mastani, amid the political struggles and battles of the time."
  },
  {
    "id": 9,
    "name": "Gully Boy",
    "release_date": "2019-02-14",
    "rating": 8.0,
    "cast": [
      "Ranveer Singh",
      "Alia Bhatt",
      "Siddhant Chaturvedi",
      "Vijay Varma",
      "Kalki Koechlin"
    ],
    "location": "Mumbai, India",
    "download_link": "https://www.moviedownloadsite.com/gully-boy",
    "image": "Images/images9.jpg",
    "description": "A musical drama about an aspiring rapper from the slums of Mumbai, who overcomes personal struggles and societal expectations to rise to fame."
  },
  {
    "id": 10,
    "name": "Chennai Express",
    "release_date": "2013-08-09",
    "rating": 6.0,
    "cast": [
      "Shah Rukh Khan",
      "Deepika Padukone",
      "Sathyaraj",
      "Nikitin Dheer",
      "Mukesh Tiwari"
    ],
    "location": "South India, India",
    "download_link": "https://www.moviedownloadsite.com/chennai-express",
    "image": "Images/images10.jpg",
    "description": "A romantic action-comedy film about a man who travels to South India to fulfill his late wife's last wish and gets entangled in a series of misadventures."
  },
  {
    "id": 11,
    "name": "Dil Chahta Hai",
    "release_date": "2001-07-20",
    "rating": 8.1,
    "cast": [
      "Aamir Khan",
      "Saif Ali Khan",
      "Akshaye Khanna",
      "Preity Zinta",
      "Dimple Kapadia"
    ],
    "location": "Goa, India",
    "download_link": "https://www.moviedownloadsite.com/dil-chahta-hai",
  "image": "Images/images11.webp",
    "description": "A coming-of-age story about three inseparable childhood friends who navigate the complexities of love, relationships, and career."
  },
  {
    "id": 12,
    "name": "Queen",
    "release_date": "2013-03-07",
    "rating": 8.1,
    "cast": [
      "Kangana Ranaut",
      "Rajkummar Rao",
      "Lisa Haydon",
      "Rishabh Arora",
      "Neha Dupia"
    ],
    "location": "Paris, France",
    "download_link": "https://www.moviedownloadsite.com/queen",
    "image": "Images/images12.jpg",
    "description": "A young woman sets off on a solo honeymoon trip to Europe after her fiancé calls off their wedding, where she discovers herself and the true meaning of freedom."
  }
]



export default MovieProvider


















