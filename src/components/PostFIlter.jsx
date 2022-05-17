import React from 'react';
import MySelect from "./UI/select/MySelect";
import MyInput from './UI/input/MyInput';

const PostFIlter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder='Поиск...'
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue='Сортировка'
                options={[
                    {value:'title', name:'По названию'},
                    {value:'body', name: 'По описанию'}
                ]}
            />
        </div>
    );
};

export default PostFIlter;