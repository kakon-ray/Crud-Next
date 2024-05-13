"use client"
import { ProductContext } from '@/app/context/ProductContext';
import axios from 'axios';
import { useCookies } from 'next-client-cookies';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'
import { useParams } from 'next/navigation'

const page = () => {

    const cookies = useCookies();
    
  let [product, setProduct] = useContext(ProductContext);
  const params = useParams()
  const router = useRouter();

    const [state, setState] = useState({
        name: "",
        number: "",
        desc: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/product/edit', {
                'name':state.name,
                'number':state.number,
                'desc':state.desc,
                'id':params.id,
            },{
                headers: {
                    Authorization: 'Bearer' + ' ' + cookies.get('mytoken'),
                  },
            });
            

            const newProduct = product.filter(
                (listItem) => listItem?.id != params.id
              );

              console.log(newProduct)

            if(response.data.success){
                setProduct([...newProduct,state])
                
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
                            <input class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Product Name" name="name" value={state.name} onChange={handleInputChange} />
                        </div>
                        <div>
                            <input class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Product Number" name="number" value={state.number} onChange={handleInputChange} />
                        </div>
                        <div>
                            <textarea rows={5} cols={5} class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600" type="text" placeholder="Product Descriptin" name="desc" value={state.desc} onChange={handleInputChange} />
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