echo "Updating Node Modules"
cp -r packages/ node_modules/@pancakeswap
echo "node_modules updates"
echo "node_modules updates"
echo "node_modules updates"
echo "node_modules updates"
echo "node_modules updates"
echo "node_modules updates"
echo "node_modules updates"
target="node_modules/@pancakeswap"
let count=0
for f in "$target"/*
do
    echo $(basename $f)
    let count=count+1
done
echo ""
echo "Count: $count"