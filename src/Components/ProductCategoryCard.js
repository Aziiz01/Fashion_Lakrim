import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from "react-router-dom";

const cardStyle = css`
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 20px;
    margin: 20px;
    width: 300px;
`;
const image='/images/sq.jpg';

function ProductCategoryCard ({ category}){
    return (
            <Link to={`/products/${category}`} style={{textDecoration:'none'}}>
                <div css={cardStyle} style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize:'cover',
                    height:'100%',
                    width:'100%'
                }}>
                    <h1 style={{
                        width:'10%',
                        color:'slateblue',
                        border:'2px solid',
                    }}>{category}</h1>
                </div>
            </Link>
    );
}

export default ProductCategoryCard;
