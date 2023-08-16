import ButtonBack from "@/components/ProductComponents/ButtonBack";
import InfoProduct from "@/components/ProductComponents/InfoProduct";

interface PageProductProps {}
export default function PageProduct(props: PageProductProps) {
    return (
        <div>
            <ButtonBack />
            <InfoProduct
                product={{
                    id: "77cd7c05-c443-4da5-9c5b-2bc067974c4b",
                    name: "Caneca The Grounds",
                    image_url:
                        "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-05.jpg",
                    price_in_cents: 3640,
                    category: "mugs",
                    description:
                        "Quia quis rem illo iure voluptatibus incidunt molestias. Inventore natus et occaecati occaecati adipisci illum earum autem vero. Aut voluptate ipsam libero quis voluptas odio. Officia maiores recusandae ipsum non. Explicabo commodi omnis et est nesciunt laborum eaque. Iste neque dolorem ut ullam maiores.",
                }}
            />
        </div>
    );
}
