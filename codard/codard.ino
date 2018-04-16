int boton = 2;
int contador=0;
void setup() {
  pinMode(boton, INPUT_PULLUP);

  Serial.begin(9600);
  Serial.println("Iniciando arduino...");
}

void loop() {
  if (digitalRead(boton) == 1 )
  {
    Serial.println("Alarma encendida");

    delay(500);
  }
  if (Serial.available() )
  {
    char orden = Serial.read();
    if (orden == 'apagar')
    {
    Serial.println("Alarma apagada");
    }

  }
  }
