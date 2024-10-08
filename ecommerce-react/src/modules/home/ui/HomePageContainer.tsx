import { Container, Stack } from "@mui/material";
import { BannerCarousel } from "../components/BannerCarousel";
import { ProductCarousel } from "../components/ProductCarousel";

export function HomePageContainer() {
  return (
    <Container maxWidth="lg" className="pb-4">
      <Stack spacing={5}>
        <BannerCarousel />
        <Stack spacing={3}>
          <ProductCarousel />
        </Stack>
      </Stack>
    </Container>
  );
}
