import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from './ui/button';
import { Search } from 'lucide-react';

type Props = {
  updateSearch: (value: string) => void;
};

const SearchProduct = ({ updateSearch }: Props) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    updateSearch(input);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      updateSearch(input)
    }
  };

  return (
    <div className='flex gap-2'>
      <Input 
        type='text' 
        placeholder='Search Products...'
        className='w-[60vw] sm:w-[50vw] md:w-[35vw]'
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <Button onClick={handleSearch}> <Search /> </Button>
    </div>
  );
}

export default SearchProduct;
