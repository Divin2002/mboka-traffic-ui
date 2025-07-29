"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, AlertCircle, BusFront, Car, UserCheck } from "lucide-react";

export default function MbokaTrafficUI() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Mâboka Traffic</h1>

      <Tabs defaultValue="trafic" className="w-full">
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="trafic">Trafic</TabsTrigger>
          <TabsTrigger value="securite">Sécurité</TabsTrigger>
          <TabsTrigger value="donnees">Données</TabsTrigger>
        </TabsList>

        <Card className="mt-4">
          <CardContent className="p-4">
            <TabsContent value="trafic">
              <div className="space-y-4">
                <Button className="w-full" variant="outline">
                  <MapPin className="mr-2 h-4 w-4" /> Carte en temps réel
                </Button>
                <Button className="w-full">
                  <AlertCircle className="mr-2 h-4 w-4" /> Signaler un embouteillage
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="securite">
              <div className="space-y-4">
                <Button className="w-full" variant="destructive">
                  <AlertCircle className="mr-2 h-4 w-4" /> Signaler un enlèvement
                </Button>
                <Button className="w-full" variant="outline">
                  <BusFront className="mr-2 h-4 w-4" /> Je prends le bus
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="donnees">
              <div className="space-y-4">
                <Button className="w-full" variant="secondary">
                  <UserCheck className="mr-2 h-4 w-4" /> Participer
                </Button>
                <Button className="w-full" variant="outline">
                  <Car className="mr-2 h-4 w-4" /> Statistiques communautaires
                </Button>
              </div>
            </TabsContent>
          </CardContent>
        </Card>
      </Tabs>
    </div>
  );
}
