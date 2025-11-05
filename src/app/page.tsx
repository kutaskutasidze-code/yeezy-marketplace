import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'

export default async function Home() {
  const supabase = await createClient()
  
  // Fetch featured products
  const { data: products } = await supabase
    .from('products')
    .select('*')
    .eq('featured', true)
    .limit(6)

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full bg-yeezy-cream/95 backdrop-blur-sm z-50 border-b border-yeezy-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              YEEZY
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              <Link href="/shop" className="hover:text-yeezy-earth transition-colors">
                SHOP
              </Link>
              <Link href="/about" className="hover:text-yeezy-earth transition-colors">
                ABOUT
              </Link>
            </nav>

            <div className="flex items-center space-x-6">
              <Link href="/auth/signin" className="hover:text-yeezy-earth transition-colors">
                SIGN IN
              </Link>
              <Link href="/cart" className="hover:text-yeezy-earth transition-colors">
                CART (0)
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
              MINIMAL
            </h1>
            <p className="text-xl md:text-2xl text-yeezy-earth max-w-2xl mx-auto">
              Designed for comfort. Built for the future.
            </p>
            <div className="pt-8">
              <Link href="/shop" className="btn-primary inline-block">
                EXPLORE COLLECTION
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 bg-yeezy-sand">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center tracking-tight">
            FEATURED
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products && products.length > 0 ? (
              products.map((product) => (
                <Link 
                  key={product.id} 
                  href={`/product/${product.id}`}
                  className="group"
                >
                  <div className="card">
                    <div className="aspect-square bg-yeezy-stone mb-4 flex items-center justify-center">
                      <span className="text-6xl text-yeezy-earth">
                        {product.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="font-medium text-lg mb-2 group-hover:text-yeezy-earth transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-yeezy-earth mb-4 text-sm line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-medium">
                        ${product.price}
                      </span>
                      <span className="text-sm text-yeezy-earth uppercase">
                        {product.category}
                      </span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <p className="text-yeezy-earth text-lg">
                  No products available. Run the database schema first.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            JOIN THE MOVEMENT
          </h2>
          <p className="text-xl text-yeezy-earth">
            Be part of something bigger. Sign up for exclusive access.
          </p>
          <Link href="/auth/signup" className="btn-primary inline-block">
            CREATE ACCOUNT
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-yeezy-carbon text-yeezy-cream py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">YEEZY</h3>
              <p className="text-yeezy-stone text-sm">
                Minimalist marketplace for the modern era.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">SHOP</h4>
              <ul className="space-y-2 text-sm text-yeezy-stone">
                <li><Link href="/shop?category=footwear">Footwear</Link></li>
                <li><Link href="/shop?category=apparel">Apparel</Link></li>
                <li><Link href="/shop?featured=true">Featured</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">ACCOUNT</h4>
              <ul className="space-y-2 text-sm text-yeezy-stone">
                <li><Link href="/auth/signin">Sign In</Link></li>
                <li><Link href="/auth/signup">Create Account</Link></li>
                <li><Link href="/dashboard">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">SUPPORT</h4>
              <ul className="space-y-2 text-sm text-yeezy-stone">
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/returns">Returns</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-yeezy-earth text-center text-sm text-yeezy-stone">
            <p>© 2025 YEEZY MARKETPLACE. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}