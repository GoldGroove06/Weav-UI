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
      <body className="h-screen"  style={{ background: 'linear-gradient(135deg, #2c003e, #000428, #6a0572)' }}>
      <ThemeProvider>
       
        {children}
        </ThemeProvider>
      </body>
    </html>
   
    
  );
}
