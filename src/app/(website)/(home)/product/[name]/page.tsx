const Product = ({ params }: { params: { name: string } }) => {
  let name = params.name
  return (
    <div className="contain h-[55vh]">
      <h2 className='capitalize'>{name}</h2>
      <div className='space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-start'>
        <img src="/product/1.avif" />
        <div className='space-y-4'>
          <h2>Product Heading</h2>
          <p> Spices are dried aromatic or pungent parts of a plant—such as seeds, fruits, roots, bark, or rhizomes—used primarily to flavor, color, or season food and beverages. They are distinct from herbs, which come from the leaves and stems of plants.</p>
          <div>
            <button className="bg-black text-white px-4 py-2 cursor-ponter">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Product
