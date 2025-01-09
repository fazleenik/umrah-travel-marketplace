import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Phone, Star } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface Review {
  text: string;
  author: string;
}

interface ProviderCardProps {
  name: string;
  description: string;
  registrationNumber: string;
  contactNumber: string;
  website: string;
  imageUrl: string;
  bookings: {
    current: number;
    total: number;
  };
  rating: number;
  reviews: Review[];
}

export const ProviderCard = ({
  name,
  description,
  registrationNumber,
  contactNumber,
  website,
  imageUrl,
  bookings,
  rating,
  reviews,
}: ProviderCardProps) => {
  const bookingPercentage = (bookings.current / bookings.total) * 100;
  const spotsLeft = bookings.total - bookings.current;

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold">{name}</CardTitle>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
        <CardDescription>Registration No: {registrationNumber}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{description}</p>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Package Bookings</span>
            <span className="font-medium">{spotsLeft} spots left</span>
          </div>
          <Progress value={bookingPercentage} className="h-2" />
        </div>

        {reviews.map((review, index) => (
          <div key={index} className="rounded-lg bg-muted/50 p-3">
            <p className="text-sm italic">"{review.text}"</p>
            <p className="mt-1 text-xs text-muted-foreground">- {review.author}</p>
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <div className="flex w-full items-center gap-2">
          <Phone className="h-4 w-4" />
          <span className="text-sm">{contactNumber}</span>
        </div>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => window.open(website, "_blank")}
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          Visit Website
        </Button>
      </CardFooter>
    </Card>
  );
};