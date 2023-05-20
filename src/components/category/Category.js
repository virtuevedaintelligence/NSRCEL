import React from 'react'
import Labels from '../labels/Labels'

function Category({ category }) {
    return (
        <div>
            <p>
                {category.Name}
                <Labels labels={category.Labels} />
            </p>
        </div>
    )
}

export default Category