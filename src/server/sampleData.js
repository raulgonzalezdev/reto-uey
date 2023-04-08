// sampleData.js


module.exports = {
    categories: [
        {
          id: "1",
          name: "Bebidas",
          image: "https://cdn.uey.mx/uploads/category-cerveza.svg",
        },
        {
          id: "2",
          name: "Rentables",
          image: "https://cdn.uey.mx/uploads/category-mobiliario.svg",
        },
        {
          id: "3",
          name: "Espacios",
          image: "https://cdn.uey.mx/uploads/category-familiares.svg",
        },
        {
          id: "4",
          name: "Musica",
          image: "https://cdn.uey.mx/uploads/category-djs.svg"
        },
        {
            id: "5",
            name: "Shows",
            image: "https://cdn.uey.mx/uploads/category-shows.svg"
          },
          {
            id: "6",
            name: "Toldos y Carpas",
            image: "https://cdn.uey.mx/uploads/category-toldos-y-ambientales.svg"
          },
          {
            id: "7",
            name: "Iluminacion ",
            image: "https://cdn.uey.mx/uploads/category-iluminacion-y-produccion.svg"
          },
      ],
      
      products: [
        // Ejemplo de datos, en una implementación real estos datos provendrían de una base de datos
        {
          id: "1",
          name: "Coca-Cola",
          category: "1",
          vendor: "Coca-Cola Company",
          image: "https://www.giorgiogastro.com.br/ipatinga/wp-content/uploads/2018/09/coca-cola.jpg",
          price: 15,
          type: "SimpleProduct",
          inventory: 100,
        },
        {
          id: "2",
          name: "Dj Pancho",
          category: "1",
          vendor: "Pancho producciones",
          image: "https://www.giorgiogastro.com.br/ipatinga/wp-content/uploads/2018/09/coca-cola.jpg",
          price: 18,
          type: "SimpleProduct",
          inventory: 300,
        },
        {
          id: "3",
          name: "Mesa redonda",
          category: "1",
          vendor: "Uey Rentals",
          image: "https://as1.ftcdn.net/v2/jpg/01/69/36/54/1000_F_169365488_B0ccQN6fmPUlTGOWycklDYcXfL39A7xC.jpg",
          price: 200,
          type: "RentableProduct",
          rentalType: "noche",
          availability: ["2023-04-01", "2023-04-03", "2023-04-05"],
        },
        {
          id: "4",
          name: "Salón de eventos",
          category: "1",
          vendor: "Eventos Uey",
          image: "https://st.depositphotos.com/1000336/3478/i/450/depositphotos_34789359-stock-photo-tables-set-for-meal.jpg",
          price: 5000,
          type: "SpaceProduct",
          location: {
            lat: 19.4326077,
            lng: -99.13320799999997,
          },
          availability: ["2023-04-10", "2023-04-15", "2023-04-20"],
        },
        {
          id: "5",
          name: "Equipo de Sonido Profesional",
          category: "1",
          vendor: "Eventos Uey",
          image: "https://st.depositphotos.com/1000336/3478/i/450/depositphotos_34789359-stock-photo-tables-set-for-meal.jpg",
          price: 5000,
          type: "SpaceProduct",
          location: {
            lat: 19.4326077,
            lng: -99.13320799999997,
          },
          availability: ["2023-04-10", "2023-04-15", "2023-04-20"],
        },
        {
        id: "6",
          name: "Toldos y Carpas",
          category: "6",
          vendor: "Eventos Uey",
          image: "https://st.depositphotos.com/1000336/3478/i/450/depositphotos_34789359-stock-photo-tables-set-for-meal.jpg",
          price: 5000,
          type: "SpaceProduct",
          location: {
            lat: 19.4326077,
            lng: -99.13320799999997,
          },
          availability: ["2023-04-10", "2023-04-15", "2023-04-20"],
        },
        {
        id: "7",
          name: "Ilumicacion a Gran escala ",
          category: "7",
          vendor: "Eventos Uey",
          image: "https://st.depositphotos.com/1000336/3478/i/450/depositphotos_34789359-stock-photo-tables-set-for-meal.jpg",
          price: 5000,
          type: "SpaceProduct",
          location: {
            lat: 19.4326077,
            lng: -99.13320799999997,
          },
          availability: ["2023-04-10", "2023-04-15", "2023-04-20"],
        },
      ]
      
  };
  