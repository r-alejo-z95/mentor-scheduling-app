import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarCheck2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function OnboradingRouteNylas() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-slate-100">
      <Card className="min-w-[450px] md:min-w-[550px] p-6 shadow-lg rounded-lg mx-auto">
        <CardHeader>
          <CardTitle className="text-lg md:text-2xl font-bold md:text-center">
            You are almost done!
          </CardTitle>
          <CardDescription className="text-xs md:text-lg md:text-center mb-2">
            We just need to connect to your calendar
          </CardDescription>
          <div className="flex justify-center">
            <img
              src="https://media1.tenor.com/m/hrj3t9pi5LoAAAAC/despicable-me-gru.gif"
              alt="Almost done gif"
              width={10}
              height={10}
              className="w-full justify-self-center rounded-md shadow-lg p-1 bg-orange-200"
            />
          </div>
        </CardHeader>
        <CardContent className="flex">
          <Button className="w-fit mx-auto">
            <Link href="/" className="flex flex-row items-center">
              <CalendarCheck2 className="size-4 mr-2" />
              Connect calendar to your account
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
