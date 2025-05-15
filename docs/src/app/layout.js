import "./globals.css";
import "@radui/ui/themes/default.css";
import ThemeProvider from "./components/ThemeProvider";




export const metadata = {
  title: "Weav UI",
  description: "A wrapper library for Rad UI",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body className="h-screen">
      <ThemeProvider>
       
        {children}
        </ThemeProvider>
      </body>
    </html>
   
    
  );
}
