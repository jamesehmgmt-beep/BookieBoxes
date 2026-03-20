import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-serif mb-4">About Bookie</h1>
            <p className="text-muted-foreground">
              Premium infant clothing designed with love and care.
            </p>
          </div>

          <div className="space-y-8 text-muted-foreground">
            <p>
              Bookie was founded with a simple mission: to create premium infant clothing that wraps your little miracle in pure comfort and joy. We believe every baby deserves the softest fabrics, the cutest designs, and clothing made with care.
            </p>
            
            <p>
              Our team of designers work tirelessly to develop innovative fabrics and adorable patterns that keep your baby comfortable and looking their best. Every piece in our collection is crafted with attention to detail and a commitment to quality.
            </p>

            <p>
              We're proud to be a brand that celebrates every little milestone. Our thoughtful designs ensure that every baby — from newborn to toddler — can be wrapped in comfort and style.
            </p>

            <div className="border-t border-border pt-8">
              <h2 className="text-xl font-medium text-foreground mb-4">Our Values</h2>
              <ul className="space-y-3">
                <li><strong className="text-foreground">Quality:</strong> Premium materials and expert craftsmanship in every piece.</li>
                <li><strong className="text-foreground">Comfort:</strong> Pure cotton softness designed for your baby's delicate skin.</li>
                <li><strong className="text-foreground">Safety:</strong> Gentle, hypoallergenic fabrics safe for newborns.</li>
                <li><strong className="text-foreground">Love:</strong> Every stitch made with love for your little miracle.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;