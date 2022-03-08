import React from "react";
import { getDataAPI } from "../../api-calls";
import PageShell from "../../page-shell";
import landingNavbarTabs from "./landing-navbar-tabs";
import landingBannerTexts from "./landing-banner-text";
import Product from "../../components/product";
import UListItem, { ListItem } from "../../components/list";

interface ProductSizes {
  id: number;
  name: string;
  qty: number;
}

export interface ProductProps {
  id: number;
  isNewWithTag: boolean;
  designer: string;
  name: string;
  size?: string;
  image: string;
  price: number;
  sizes?: ProductSizes[];
  retail?: number;
}

export interface ProductsAPIProps {
  id: number;
  is_new_with_tag: boolean;
  designer: string;
  name: string;
  size?: string;
  image: string;
  price: number;
  sizes?: ProductSizes[];
  retail?: number;
}

const Landing = () => {
  const [items, setItems] = React.useState<ProductProps[]>([]);
  const [errorMsg, setErrorMsg] = React.useState<any>(""); // for now
  const getData = async () => {
    try {
      const data = await getDataAPI();
      const mappedData = data.map(
        ({ is_new_with_tag, ...rest }: ProductsAPIProps) => ({
          isNewWithTag: is_new_with_tag,
          ...rest,
        })
      );
      setItems(mappedData);
    } catch (error) {
      setErrorMsg(error);
    }
  };
  React.useEffect(() => {
    getData();
  }, []);

  return (
    <PageShell
      tabs={landingNavbarTabs}
      bannerTexts={landingBannerTexts}
      title='Wishlist'
      withPadding
      errorMsg={errorMsg}
    >
      {items?.length > 0 ? (
        <UListItem
          display='flex'
          flexWrap='wrap'
          justifyContent='center'
          gap='40px 20px'
        >
          {items.map((product) => (
            <ListItem key={product.id} display='flex'>
              <Product {...product} />
            </ListItem>
          ))}
        </UListItem>
      ) : null}
    </PageShell>
  );
};

export default Landing;
