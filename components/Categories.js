import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
import { useState } from 'react'
import { useEffect } from 'react'
import { url } from 'react'
import client from '../sanity'
import { urlFor } from '../sanity'
import category from '../sanity/schemas/category'

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(()=> {

        client.fetch(` 
        *[_type =="category"]`).then((data) => {
          setCategories(data);
        });
      }, []);

  return (
    <ScrollView 
    contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
    }}
    horizontal 
    showHorizontalScrollIndicator={false} >

    {/*Category cards */}
    {categories.map((category) => (
        <CategoryCard 
            key={category._id}
            imgUrl={urlFor(category.image).width(200).url()}
            title={category.name}
        />
    ))}
    </ScrollView>
  )
}

export default Categories