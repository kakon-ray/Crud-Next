"use client"
import { ProductContext } from '@/app/context/ProductContext';
import axios from 'axios';
import { useCookies } from 'next-client-cookies';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'
import { useParams,redirect  } from 'next/navigation'

const page = () => {

    const cookies = useCookies();
    
  let [product, setProduct] = useContext(ProductContext);
  const params = useParams()
  const router = useRouter();


  const singleProduct = product.filter(
    (listItem) => listItem?.id == params.id
  );




    const handleSubmit = async (event) => {
        event.preventDefault();
 
        // console.log(event.target.name.value);

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/product/edit', {
                'name':event.target.name.value,
                'number':event.target.number.value,
                'desc':event.target.desc.value,
                'id':params.id,
            },{
                headers: {
                    Authorization: 'Bearer' + ' ' + cookies.get('token'),
                  },
            });
            

            const newProduct = product.filter(
                (listItem) => listItem?.id != params.id
              );

              console.log(newProduct)

            if(response.data.success){
                setProduct([...newProduct,{
                    'name':event.target.name.value,
                    'number':event.target.number.value,
                    'desc':event.target.desc.value,
                    'id':params.id,
                }])
                router.push('/admin/product')
            
            }
          

          } catch (error) {
            console.log(error);
            
          }

       

     
    };



    return (
        <main className="min-h-screen">

            <section class="flex justify-center items-center h-screen bg-gray-100">
                <form onSubmit={handleSubmit}>
                    <div class="max-w-md w-full bg-white rounded p-6 space-y-4">
                        <div class="mb-4">
                            <h2 class="text-xl font-bold text-center">Update Product</h2>
                        </div>
                        <div>
                            <input class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Product Name" name="name" defaultValue={singleProduct[0]?.name} />
                        </div>
                        <div>
                            <input class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Product Number" name="number" defaultValue={singleProduct[0]?.number} />
                        </div>
                        <div>
                            <textarea rows={5} cols={5} class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Product Descriptin" name="desc" defaultValue={singleProduct[0]?.desc} />
                        </div>
                        <div>
                            <button class="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">Submit</button>
                        </div>

                    </div>
                </form>
            </section>
        </main>
    );
};

export default page;