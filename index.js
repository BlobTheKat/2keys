globalThis.Map2 = class Map2 extends Map{
	get size(){let s=0;for(const i of this.values())s+=i.size;return s}
	constructor(entries){
		super()
		if(entries) for(const {0:a,1:b,2:c} of entries) this.set(a,b,c)
	}
	_submap(a){return super.get(a)}
	submap(a){
		return new Map(super.get(a))
	}
	get(a, b){
		const s = super.get(a)
		return s&&s.get(b)
	}
	swap(a, b, c){
		let v
		const s = super.get(a)
		if(s){ v=s.get(b); s.set(b, c) }
		else super.set(a, new Map().set(b, c))
		return v
	}
	set(a, b, c){
		const s = super.get(a)
		if(s) s.set(b, c)
		else super.set(a, new Map().set(b, c))
		return this
	}
	delete(a, b){
		const s = super.get(a)
		if(s && !(s.delete(b),s.size)) return super.delete(a)
		else return false
	}
	pop(a, b){
		let v
		const s = super.get(a)
		if(s){v=s.get(b); if(s.delete(b),!s.size) super.delete(a)}
		return v
	}
	has(a, b){
		const s = super.get(a)
		return s ? s.has(b) : false
	}
	entries(){
		const i = super.entries(), j = i.next().value
		return {i, c: j?j[1].entries():null, k: j&&j[0], next(){
			if(!this.c) return {value: undefined, done: true}
			let {value, done} = this.c.next()
			if(done){
				const a = this.i.next()
				if(a.done) return this.c=null,a
				this.k = a.value[0]
				;({value} = (this.c = a.value[1].entries()).next())
			}
			return {value: [this.k, value[0], value[1]], done: false}
		},[Symbol.iterator](){return this}}
	}
	keys(){
		const i = super.entries(), j = i.next().value
		return {i, c: j?j[1].keys():null, k: j&&j[0], next(){
			if(!this.c) return {value: undefined, done: true}
			let {value, done} = this.c.next()
			if(done){
				const a = this.i.next()
				if(a.done) return this.c=null,a
				this.k = a.value[0]
				;({value} = (this.c = a.value[1].keys()).next())
			}
			return {value: [this.k, value], done: false}
		},[Symbol.iterator](){return this}}
	}
	values(){
		const i = super.values(), j = i.next().value
		return {i, c: j?j.values():null, next(){
			if(!this.c) return {value: undefined, done: true}
			let {value, done} = this.c.next()
			if(done){
				const a = this.i.next()
				if(a.done) return this.c=null,a
				;({value} = (this.c = a.value.values()).next())
			}
			return {value, done: false}
		},[Symbol.iterator](){return this}}
	}
	forEach(fn){
		for(const [k, m] of super.entries()) for(const [k2, v] of m) fn(v,k,k2, this)
	}
}

globalThis.Set2 = class Set2 extends Map{
	get size(){let s=0;for(const i of super.values())s+=i.size;return s}
	constructor(entries){
		super()
		if(entries) for(const {0:a,1:b} of entries) this.add(a,b)
	}
	_subset(a){return super.get(a)}
	subset(a){
		return new Set(super.get(a))
	}
	add(a, b){
		const s = super.get(a)
		if(s) s.add(b)
		else super.set(a, new Set([b]))
		return this
	}
	swap(a, b){
		const s = super.get(a)
		if(s){ const v = s.size; s.add(b); return s.size==v }
		else return super.set(a, new Set([b])), false
	}
	delete(a, b){
		const s = super.get(a)
		if(s && !(s.delete(b),s.size)) return super.delete(a)
		else return false
	}
	has(a, b){
		const s = super.get(a)
		return s ? s.has(b) : false
	}
	entries(){
		const i = super.entries(), j = i.next().value
		return {i, c: j?j[1].values():null, k: j&&j[0], next(){
			if(!this.c) return {value: undefined, done: true}
			let {value, done} = this.c.next()
			if(done){
				const a = this.i.next()
				if(a.done) return this.c=null,a
				this.k = a.value[0]
				;({value} = (this.c = a.value[1].values()).next())
			}
			return {value: [this.k, value,[this.k,value]], done: false}
		},[Symbol.iterator](){return this}}
	}
	keys(){
		const i = super.entries(), j = i.next().value
		return {i, c: j?j[1].values():null, k: j&&j[0], next(){
			if(!this.c) return {value: undefined, done: true}
			let {value, done} = this.c.next()
			if(done){
				const a = this.i.next()
				if(a.done) return this.c=null,a
				this.k = a.value[0]
				;({value} = (this.c = a.value[1].values()).next())
			}
			return {value: [this.k, value], done: false}
		},[Symbol.iterator](){return this}}
	}
	forEach(fn){
		for(const [k, m] of super.entries()) for(const k2 of m) fn(k,k2,[k,k2],this)
	}
}
{
	const k = Object.getOwnPropertyDescriptor(Set2.prototype, 'keys')
	Object.defineProperty(Set2.prototype, Symbol.iterator, k)
	Object.defineProperty(Set2.prototype, 'values', k)
	const k2 = {value: undefined, enumerable: false}
	Object.defineProperty(Set2.prototype, 'get', k2)
	Object.defineProperty(Set2.prototype, 'set', k2)
}