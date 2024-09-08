module Jekyll
    class TagPageGenerator < Generator
      safe true
  
      def generate(site)
        site.tags.each do |tag, posts|
          site.pages << TagPage.new(site, site.source, "tags/", tag)
        end
      end
    end
  
    class TagPage < Page
      def initialize(site, base, dir, tag)
        @site = site
        @base = base
        @dir = dir
        @name = "tag_#{tag}.html"
  
        self.process(@name)
        self.read_yaml(File.join(base, '_layouts'), 'tag.html')
        self.data['tag'] = tag
        self.data['title'] = "#{tag} に関する記事一覧"
      end
    end
  end
