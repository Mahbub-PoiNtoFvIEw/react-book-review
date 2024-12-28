import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getReadingBook } from '../../utility/LocalStorage';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const PagesToRead = () => {
    const [readBooks, setReadBooks] = useState([]);
    const books = useLoaderData();

    useEffect(()=>{
        const storedBooksId = getReadingBook();
        if(books.length > 0){
            const listedBooks = books.filter(book => storedBooksId.includes(book.bookId));
            setReadBooks(listedBooks);
        }
    },[books])

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };
      
      const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };

    console.log(readBooks)
    return (
        <div>
            <div className='bg-slate-200 py-8 flex justify-center items-center'>
                <BarChart
                    width={650}
                    height={400}
                    data={readBooks}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bookName" />
                    <YAxis />
                    <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {readBooks.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </div>
        </div>
    );
};

export default PagesToRead;