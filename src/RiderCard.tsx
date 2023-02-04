import { Card, CardHeader, Avatar, IconButton, CardMedia } from "@mui/material";
import { red } from "@mui/material/colors";

interface RiderCardProps {
  name: string;
  imgUrl: string;
  nickname: string;
}
export const RiderCard: React.FC<RiderCardProps> = ({
  name,
  imgUrl,
  nickname,
}) => {
  return (
    <Card sx={{ width: 300 }}>
      <CardHeader title={name} subheader={nickname} />
      <CardMedia component="img" height="194" image={imgUrl} alt={nickname} />
    </Card>
  );
};
