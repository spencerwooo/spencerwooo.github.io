# Spencer's Blog Archive

Latest post can be found at: [Spencer's Blog](https://blog.spencerwoo.com/)

<details>

<summary>
Archive Build Instructions
</summary>

## Build Instructions

``` bash
# Install Node.js v10.x, using Ubuntu
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install yarn
$ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
$ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
$ sudo apt-get update && sudo apt-get install yarn
# Install Hexo
$ sudo yarn global add hexo-cli

# Install dependencies
$ sudo yarn install

# Generate files and preview locally at http://localhost:4000
$ hexo generate
$ hexo server
```

</details>
