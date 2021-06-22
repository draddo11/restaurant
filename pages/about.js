import Image from 'next/image'


const about = () => {
    return (    
        <div>
        <h1>About</h1>
        <p>Loree quam impedit a ex quaerat quibusdam. Reiciendis laboriosam obcaecati blanditiis. Repudiandae velit maiores consequuntur tempore enim nihil harum eaque molestias magni, ipsa inventore aliquam a porro hic temporibus omnis repellat ducimus assumenda quos in id ad, exercitationem optio distinctio. Ratione odit aperiam pariatur hic vel unde eos, porro alias quos dolorem ipsa corrupti placeat at quam nam cum iure perferendis iusto. Provident minima quaerat veritatis ducimus impedit explicabo corrupti repellendus tempora in nesciunt cumque nihil nostrum, enim quidem fugiat, error, delectus quod ea consequuntur! Harum, doloribus. Repellendus voluptatem eos totam nihil rem dolorem quam eveniet voluptatibus molestias? Ducimus, tempore? Soluta ipsa, natus quas doloribus, nostrum deserunt repellendus saepe laudantium incidunt fugit nemo odit distinctio quo culpa rerum magnam perspiciatis vero cumque eveniet beatae. Hic delectus, minus doloribus deleniti soluta cupiditate quaerat harum ratione autem mollitia ipsa, aliquid officiis dolor debitis quos unde dolores vel rem voluptatibus sapiente perspiciatis rerum accusantium? Repudiandae fuga debitis aperiam commodi inventore! Tenetur laudantium perspiciatis, quae non dignissimos beatae, vitae cum dolore unde neque ducimus modi est, libero ullam! Aspernatur accusantium dolorum, sed quia earum aut ratione? Sapiente consectetur dolor quod magnam quam. Nam, ipsa ipsum blanditiis quae fugit eos explicabo laboriosam accusamus magnam dolorum itaque repellendus omnis cumque, nesciunt molestias minima mollitia modi debitis laudantium quas error sequi ex deserunt. Ratione cum dolorum molestiae id ea provident! Expedita obcaecati sunt, iste vel quaerat voluptatum fugit perspiciatis tempore asperiores nisi doloribus itaque aut laudantium assumenda quia dolores sed laborum ipsa cum earum. Quidem tenetur voluptatem vero, expedita, optio ducimus nostrum quos rerum possimus qui nisi repudiandae ipsa tempore in maiores est eligendi iste molestiae id architecto quo? Natus,
         modi aut labore vero a impedit laboriosam? Aperiam, velit soluta illo dolores dolorum harum maxime.</p>
        <Image
         src="/background.jpg"
         alt="abstract black bakground"
         layout="fill" 
        //  width={880}
        //  height={450}
         objectFit="cover"
         quality={100}
         sizes="100%">
       </Image>
        </div>
     );
}
 
export default about;
