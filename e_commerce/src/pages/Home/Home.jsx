import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from './Home-styles';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://http://localhost:3000/'); // Altere a URL conforme necessário
                setProducts(response.data);
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <Container>
            <h2>Página inicial</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.product_name}</li>
                ))}
            </ul>
        </Container>
    );
};

export default Home;
