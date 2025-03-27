
export default  function Infobox({data,ispresent}){
    return(
        <>
        {ispresent && (
          <div className='infobox'>
            <h1 style={{ color: 'blue', fontStyle: 'italic' }}>place: {data.place}</h1>
            <h2>
              temperature: {data.temp}&deg;C <br />
              Humidity: {data.humidity}
            </h2>
          </div>
        )}
      </>
    )
}