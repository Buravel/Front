import React from 'react';
import Product from './Product';
import './productList.scss';

const ProductList = ({ plans }) => {
    if (plans.length === 0) {
        return (
            <h1 style={{ textAlign: 'center', marginTop: '100px' }}>
                검색결과가 없네요!
            </h1>
        );
    }
    return (
        <div className="home-product-list">
            {plans.map((plan, i) => (
                <Product product={plan} key={'home-product' + i} />
            ))}
        </div>
    );
};
export default ProductList;
