package Vladimir_Mikic_II_532015_APRSP.ctrl;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import Vladimir_Mikic_II_532015_APRSP.jpa.Igrac;
import Vladimir_Mikic_II_532015_APRSP.jpa.Tim;
import Vladimir_Mikic_II_532015_APRSP.reps.IgracRepository;
import Vladimir_Mikic_II_532015_APRSP.reps.TimRepository;

@RestController
public class IgracRestController {
	
	@Autowired
	private IgracRepository igracRepository;
	
	@Autowired
	private TimRepository timRepository;
	
	@CrossOrigin
	@GetMapping ("igrac")
	public Collection<Igrac>getAll(){
		return igracRepository.findAll();
	}
	
	@CrossOrigin
	@GetMapping("igrac/{id}")
	public Igrac getOne (@PathVariable("id") Integer id) {
		return igracRepository.getOne(id);
	}
	
	@CrossOrigin
	@GetMapping("igracitima/{id}")
	public Collection<Igrac> getIgraciTima (@PathVariable ("id") Integer id){
		Tim tim = timRepository.getOne(id);
		return igracRepository.findByTimBean(tim);
	}
	
	@CrossOrigin
	@PostMapping ("igrac")
	public ResponseEntity<HttpStatus> addIgrac (@RequestBody Igrac igrac){
		igracRepository.save(igrac);
		return new ResponseEntity<HttpStatus>(HttpStatus.CREATED);
	}
	
	@CrossOrigin
	@PutMapping ("igrac/{id}")
	public ResponseEntity<HttpStatus> updateIgrac (@RequestBody Igrac igrac, @PathVariable ("id") Integer id){
		if (igracRepository.existsById(id)) {
			igrac.setId(id);
			igracRepository.save(igrac);
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		}
		return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
	}
	
	@CrossOrigin
	@DeleteMapping ("igrac/{id}")
	public ResponseEntity<HttpStatus> delete (@PathVariable ("id") Integer id){
		if (igracRepository.existsById(id)) {
				igracRepository.deleteById(id);
				return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		}
		return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
	}


}
